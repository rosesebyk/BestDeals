const categoryKeywords = {
  Laptops: ["laptop", "notebook"],
  Phones: ["phone", "mobile", "smartphone", "iphone"],
  TVs: ["tv", "television"],
  Headphones: ["headphone", "headphones", "earphone", "audio"],
  Tablets: ["tablet", "ipad", "pad"],
  Cameras: ["camera", "mirrorless", "dslr"],
};

const searchStopWords = new Set([
  "a",
  "an",
  "any",
  "best",
  "below",
  "buy",
  "compare",
  "deals",
  "deal",
  "everything",
  "find",
  "for",
  "me",
  "or",
  "please",
  "show",
  "the",
  "under",
  "with",
]);

function normalizeSearchText(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/₹/g, " ")
    .replace(/[^\w\s]/g, " ")
    .replace(/\d[\d,]*/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function tokenizeSearchText(value) {
  return normalizeSearchText(value)
    .split(" ")
    .filter((token) => token && !searchStopWords.has(token));
}

function levenshteinDistance(source, target) {
  if (source === target) {
    return 0;
  }

  if (!source.length) {
    return target.length;
  }

  if (!target.length) {
    return source.length;
  }

  const matrix = Array.from({ length: source.length + 1 }, () => new Array(target.length + 1).fill(0));

  for (let row = 0; row <= source.length; row += 1) {
    matrix[row][0] = row;
  }

  for (let column = 0; column <= target.length; column += 1) {
    matrix[0][column] = column;
  }

  for (let row = 1; row <= source.length; row += 1) {
    for (let column = 1; column <= target.length; column += 1) {
      const cost = source[row - 1] === target[column - 1] ? 0 : 1;
      matrix[row][column] = Math.min(
        matrix[row - 1][column] + 1,
        matrix[row][column - 1] + 1,
        matrix[row - 1][column - 1] + cost,
      );
    }
  }

  return matrix[source.length][target.length];
}

function fuzzyTokenMatch(inputToken, candidateToken) {
  if (!inputToken || !candidateToken) {
    return false;
  }

  if (candidateToken.includes(inputToken) || inputToken.includes(candidateToken)) {
    return true;
  }

  const maxDistance = Math.min(inputToken.length, candidateToken.length) <= 4 ? 1 : 2;
  return levenshteinDistance(inputToken, candidateToken) <= maxDistance;
}

function inferCategory(query, fallbackCategory) {
  const normalizedQuery = normalizeSearchText(query);
  const queryTokens = tokenizeSearchText(query);
  let bestCategory = null;
  let bestScore = 0;

  Object.entries(categoryKeywords).forEach(([category, keywords]) => {
    let score = 0;

    keywords.forEach((keyword) => {
      const normalizedKeyword = normalizeSearchText(keyword);
      if (normalizedQuery.includes(normalizedKeyword)) {
        score += 3;
      }
      if (queryTokens.some((token) => fuzzyTokenMatch(token, normalizedKeyword))) {
        score += 2;
      }
    });

    if (score > bestScore) {
      bestScore = score;
      bestCategory = category;
    }
  });

  return bestCategory || fallbackCategory || "Laptops";
}

function parseBudget(query) {
  const compactMatch = String(query || "").match(/(?:under|below|upto|up to)?\s*₹?\s*(\d[\d,]*)(?:\s*k)?/i);
  if (!compactMatch) {
    return null;
  }
  let value = Number(compactMatch[1].replace(/,/g, ""));
  if (/[kK]\b/.test(query)) {
    value *= 1000;
  }
  return Number.isFinite(value) ? value : null;
}

function inferUseCase(query) {
  const value = String(query || "").toLowerCase();
  if (value.includes("gaming")) return "gaming";
  if (value.includes("coding") || value.includes("programming")) return "coding";
  if (value.includes("student")) return "students";
  if (value.includes("camera")) return "photography";
  if (value.includes("battery")) return "battery life";
  return "general use";
}

function formatINR(value) {
  return `₹${Number(value).toLocaleString("en-IN")}`;
}

function specIncludes(product, terms) {
  const text = [product.name, product.specs, ...(product.status || [])].join(" ").toLowerCase();
  return terms.some((term) => text.includes(term));
}

function getUseCaseProfile(question, searchState) {
  const lowered = [question, searchState?.query, searchState?.category].filter(Boolean).join(" ").toLowerCase();
  return {
    camera: lowered.includes("camera") || lowered.includes("photo") || lowered.includes("portrait"),
    battery: lowered.includes("battery") || lowered.includes("backup"),
    gaming: lowered.includes("gaming") || lowered.includes("fps") || lowered.includes("performance"),
    coding: lowered.includes("coding") || lowered.includes("programming") || lowered.includes("developer"),
    student: lowered.includes("student") || lowered.includes("college"),
    value:
      lowered.includes("value") ||
      lowered.includes("budget") ||
      lowered.includes("cheap") ||
      lowered.includes("best") ||
      lowered.includes("deal"),
    premium: lowered.includes("premium") || lowered.includes("flagship"),
  };
}

function rankProducts(products, question) {
  const profile = getUseCaseProfile(question);

  return [...products].sort((left, right) => {
    const scoreProduct = (product) => {
      let score = Number(product.rating || 0) * 16;
      score += Number(product.originalPrice || product.price || 0) - Number(product.price || 0);
      score -= Number(product.price || 0) / 20000;

      if (profile.camera && specIncludes(product, ["camera", "best camera", "portrait", "pro"])) score += 18;
      if (profile.battery && specIncludes(product, ["battery", "mah", "fast charging", "all-day", "50h", "65h"])) score += 14;
      if (profile.gaming && specIncludes(product, ["snapdragon 8", "ryzen 7", "intel i7", "120hz", "oled", "amoled"])) score += 16;
      if (profile.coding && specIncludes(product, ["16gb", "intel i7", "intel i5", "ryzen 7", "ryzen 5", "ssd"])) score += 14;
      if (profile.student && specIncludes(product, ["budget", "lightweight", "battery", "balanced", "value"])) score += 10;
      if (profile.value) score += Math.round((Number(product.originalPrice || product.price || 0) - Number(product.price || 0)) / 1000) * 3;
      if (profile.premium && specIncludes(product, ["premium", "flagship", "iphone", "oled", "retina"])) score += 10;

      return score;
    };

    return scoreProduct(right) - scoreProduct(left);
  });
}

function getRecommendationReason(product, question, searchState, index) {
  const profile = getUseCaseProfile(question, searchState);
  const reasons = [];

  if (profile.camera && specIncludes(product, ["camera", "best camera", "portrait", "pro"])) {
    reasons.push("strongest for camera-focused buying");
  }
  if (profile.battery && specIncludes(product, ["battery", "mah", "fast charging", "50h", "65h"])) {
    reasons.push("better for battery life");
  }
  if (profile.gaming && specIncludes(product, ["snapdragon 8", "ryzen 7", "intel i7", "120hz"])) {
    reasons.push("better performance for gaming");
  }
  if (profile.coding && specIncludes(product, ["16gb", "ssd", "intel i5", "intel i7", "ryzen 5", "ryzen 7"])) {
    reasons.push("more practical for coding and everyday work");
  }
  if (profile.value && Number(product.originalPrice || product.price || 0) > Number(product.price || 0)) {
    reasons.push("gives stronger value for the money");
  }

  if (!reasons.length) {
    if (index === 0) return "best overall match for the current filters";
    if (index === 1) return "good alternative if you want a different price-to-performance balance";
    return "useful backup option to compare before buying";
  }

  return reasons.slice(0, 2).join(" and ");
}

function buildHeuristicChatAnswer(question, products, searchState) {
  if (!products.length) {
    return "I need at least one matching product before I can compare options for you.";
  }

  const ranked = rankProducts(products, question);
  const topThree = ranked.slice(0, 3);
  const opener =
    topThree.length > 1
      ? `Here are the strongest picks from your current shortlist for "${question || "this search"}".`
      : "Here is the strongest match from your current shortlist.";

  const recommendations = topThree
    .map((product, index) => {
      const reason = getRecommendationReason(product, question, searchState, index);
      return `${product.name} at ${formatINR(product.price)} on ${product.store} stands out because it is ${reason}.`;
    })
    .join(" ");

  const closer =
    "Ask about camera, battery, gaming, coding, student use, or pure value and I will reshuffle the ranking for that use case.";

  return `${opener} ${recommendations} ${closer}`;
}

function buildHeuristicInsight({ query, category, budget }) {
  const useCase = inferUseCase(query);
  const categoryLabel = category.toLowerCase();
  const budgetLabel = budget ? `under ₹${budget.toLocaleString("en-IN")}` : "with flexible budget";
  return {
    mode: "heuristic",
    summary: `I interpreted this as a search for ${categoryLabel} ${budgetLabel}, optimized for ${useCase}.`,
    filters: {
      category,
      budget,
      useCase,
    },
    suggestions: [
      `See the best value ${categoryLabel} first, then compare the rest by rating and price.`,
      `Ask AI to rank ${categoryLabel} for ${useCase}, battery, camera, or gaming.`,
      "Use price alerts on 2 or 3 favorites before buying.",
      "Check warranty, seller quality, and return policy before final purchase.",
      "Compare how much each deal saves against the original price, not just the final price.",
      "If one result is slightly over budget, keep it in the shortlist and watch for a drop.",
      "Check both top-rated and lowest-price picks before deciding.",
      "Compare 3 or more close options so you do not miss a better value deal.",
    ],
  };
}

async function callOpenAI(input, instructions) {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return null;
  }

  const response = await fetch("https://api.openai.com/v1/responses", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: process.env.OPENAI_MODEL || "gpt-5",
      instructions,
      input,
    }),
  });

  if (!response.ok) {
    const detail = await response.text();
    throw new Error(`OpenAI request failed: ${response.status} ${detail}`);
  }

  return response.json();
}

async function parseShoppingQuery(query, fallbackCategory) {
  const category = inferCategory(query, fallbackCategory);
  const budget = parseBudget(query);
  const heuristic = buildHeuristicInsight({ query, category, budget });

  if (!process.env.OPENAI_API_KEY) {
    return {
      ...heuristic,
      error: "OpenAI API key is missing.",
    };
  }

  try {
    const payload = await callOpenAI(
      `User query: ${query}\nFallback category: ${fallbackCategory || "Laptops"}`,
      [
        "You are an ecommerce shopping intent parser.",
        "Extract the user's likely category, budget, use case, and a short shopping summary.",
        "Return strict JSON with keys: summary, filters, suggestions.",
        "filters must contain category, budget, useCase.",
        "suggestions must be an array of 4 to 6 short strings.",
      ].join(" "),
    );

    const text = payload.output_text || "";
    const parsed = JSON.parse(text);
    return {
      mode: "openai",
      summary: parsed.summary || heuristic.summary,
      filters: {
        category: parsed.filters?.category || heuristic.filters.category,
        budget: Number(parsed.filters?.budget) || heuristic.filters.budget,
        useCase: parsed.filters?.useCase || heuristic.filters.useCase,
      },
      suggestions: Array.isArray(parsed.suggestions) && parsed.suggestions.length
        ? parsed.suggestions.slice(0, 6)
        : heuristic.suggestions,
    };
  } catch {
    return {
      ...heuristic,
      error: "OpenAI search is unavailable right now. Check API quota and billing.",
    };
  }
}

async function answerDealQuestion(question, products, searchState) {
  const shortlist = products.map((product) => ({
    name: product.name,
    store: product.store,
    price: product.price,
    rating: product.rating,
    specs: product.specs,
    status: product.status,
  }));

  const heuristicAnswer = {
    mode: "heuristic",
    answer: buildHeuristicChatAnswer(question, products, searchState),
  };

  if (!process.env.OPENAI_API_KEY) {
    return {
      ...heuristicAnswer,
      error: "OpenAI API key is missing.",
    };
  }

  try {
    const payload = await callOpenAI(
      [
        `User question: ${question}`,
        `Current search state: ${JSON.stringify(searchState)}`,
        `Current shortlist: ${JSON.stringify(shortlist)}`,
      ].join("\n"),
      [
        "You are a concise shopping assistant for a deal comparison app.",
        "Answer only from the provided shortlist and search state.",
        "Keep the answer under 120 words.",
        "If there are no products, say that clearly.",
      ].join(" "),
    );

    return {
      mode: "openai",
      answer: payload.output_text || heuristicAnswer.answer,
    };
  } catch {
    return {
      ...heuristicAnswer,
      error: "OpenAI assistant is unavailable right now. Check API quota and billing.",
    };
  }
}

module.exports = {
  answerDealQuestion,
  parseShoppingQuery,
};
