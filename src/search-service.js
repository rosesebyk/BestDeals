const { mockCatalog } = require("./mock-catalog");

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

function getProviderStatus() {
  return {
    amazon: {
      configured: Boolean(process.env.AMAZON_ASSOCIATE_TAG),
      mode: process.env.AMAZON_ASSOCIATE_TAG ? "ready-for-live-adapter" : "mock",
    },
    flipkart: {
      configured: Boolean(process.env.FLIPKART_AFFILIATE_ID && process.env.FLIPKART_TOKEN),
      mode: process.env.FLIPKART_AFFILIATE_ID && process.env.FLIPKART_TOKEN ? "ready-for-live-adapter" : "mock",
    },
    croma: {
      configured: Boolean(process.env.CROMA_API_KEY || process.env.CROMA_FEED_URL || process.env.CROMA_AFFILIATE_TAG),
      mode: process.env.CROMA_API_KEY || process.env.CROMA_FEED_URL || process.env.CROMA_AFFILIATE_TAG ? "ready-for-live-adapter" : "mock",
    },
  };
}

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

function matchesSearchQuery(query, values) {
  const terms = tokenizeSearchText(query);
  if (!terms.length) {
    return true;
  }

  const candidateTokens = tokenizeSearchText(values.join(" "));
  return terms.every((term) => candidateTokens.some((candidate) => fuzzyTokenMatch(term, candidate)));
}

function searchMockCatalog({ query, category }) {
  const activeCategory = inferCategory(query, category);

  const products = mockCatalog
    .filter((product) => product.category === activeCategory)
    .filter((product) => {
      return matchesSearchQuery(query, [product.name, product.brand, product.category, product.specs, product.store]);
    });

  return {
    products,
    meta: {
      mode: "mock",
      category: activeCategory,
      providers: getProviderStatus(),
      query: query || "",
      fetchedAt: new Date().toISOString(),
    },
  };
}

async function searchCatalog({ query, category }) {
  return searchMockCatalog({ query, category });
}

module.exports = {
  getProviderStatus,
  searchCatalog,
};
