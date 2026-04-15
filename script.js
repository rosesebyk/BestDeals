const storageKeys = {
  alerts: "bestdeals.alerts",
  preferences: "bestdeals.preferences",
  recentSearches: "bestdeals.recent-searches",
};

const fallbackProducts = [
  {
    id: "lenovo-ideapad-slim-3",
    name: "Lenovo IdeaPad Slim 3 Gen 8",
    brand: "Lenovo",
    category: "Laptops",
    store: "Amazon",
    price: 54990,
    originalPrice: 62999,
    rating: 4.4,
    reviews: "2.1k",
    ram: 16,
    score: 94,
    specs: 'Intel i5-12th, 16GB, 512GB SSD, 15.6" FHD',
    status: ["Best value", "In stock", "13% off"],
    affiliateUrl: "https://www.amazon.in/",
    priceHistory: {
      "1M": { points: [62, 59, 57, 55, 54, 55, 54], labels: ["Mar 10", "Mar 17", "Mar 24", "Apr 1", "Apr 7", "Today"] },
      "3M": { points: [65, 63, 60, 58, 56, 54, 55], labels: ["Jan", "Feb", "Mar", "Apr"] },
      "6M": { points: [68, 65, 63, 62, 58, 55, 54], labels: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr"] },
      "1Y": { points: [72, 70, 67, 65, 62, 58, 54], labels: ["Apr 24", "Jun", "Aug", "Oct", "Dec", "Feb", "Apr 25"] },
    },
  },
  {
    id: "hp-pavilion-15",
    name: "HP Pavilion 15-eg3001TU",
    brand: "HP",
    category: "Laptops",
    store: "Flipkart",
    price: 57490,
    originalPrice: 64990,
    rating: 4.2,
    reviews: "1.8k",
    ram: 16,
    score: 89,
    specs: 'Ryzen 5 7520U, 16GB, 512GB, 15.6" FHD IPS',
    status: ["In stock", "11% off"],
    affiliateUrl: "https://www.flipkart.com/",
    priceHistory: {
      "1M": { points: [63, 61, 60, 58, 57, 57, 57], labels: ["Mar 10", "Mar 17", "Mar 24", "Apr 1", "Apr 7", "Today"] },
      "3M": { points: [67, 65, 63, 61, 60, 58, 57], labels: ["Jan", "Feb", "Mar", "Apr"] },
      "6M": { points: [69, 67, 66, 64, 62, 60, 57], labels: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr"] },
      "1Y": { points: [73, 71, 69, 67, 65, 61, 57], labels: ["Apr 24", "Jun", "Aug", "Oct", "Dec", "Feb", "Apr 25"] },
    },
  },
  {
    id: "asus-vivobook-15",
    name: "ASUS VivoBook 15 X1502ZA",
    brand: "ASUS",
    category: "Laptops",
    store: "Croma",
    price: 59990,
    originalPrice: 67500,
    rating: 4.3,
    reviews: "890",
    ram: 8,
    score: 86,
    specs: 'Intel i5-13th, 8GB, 512GB, 15.6" OLED',
    status: ["OLED display", "11% off"],
    affiliateUrl: "https://www.croma.com/",
    priceHistory: {
      "1M": { points: [67, 66, 64, 63, 61, 60, 60], labels: ["Mar 10", "Mar 17", "Mar 24", "Apr 1", "Apr 7", "Today"] },
      "3M": { points: [71, 69, 67, 65, 63, 61, 60], labels: ["Jan", "Feb", "Mar", "Apr"] },
      "6M": { points: [74, 72, 70, 68, 65, 62, 60], labels: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr"] },
      "1Y": { points: [78, 76, 74, 72, 69, 64, 60], labels: ["Apr 24", "Jun", "Aug", "Oct", "Dec", "Feb", "Apr 25"] },
    },
  },
  {
    id: "acer-aspire-lite",
    name: "Acer Aspire Lite 12th Gen",
    brand: "Acer",
    category: "Laptops",
    store: "Amazon",
    price: 52990,
    originalPrice: 60990,
    rating: 4.1,
    reviews: "1.4k",
    ram: 16,
    score: 90,
    specs: 'Intel i5-12th, 16GB, 512GB SSD, 15.6" FHD',
    status: ["Budget pick", "In stock", "13% off"],
    affiliateUrl: "https://www.amazon.in/",
    priceHistory: {
      "1M": { points: [60, 58, 57, 55, 54, 53, 53], labels: ["Mar 10", "Mar 17", "Mar 24", "Apr 1", "Apr 7", "Today"] },
      "3M": { points: [64, 62, 60, 58, 56, 54, 53], labels: ["Jan", "Feb", "Mar", "Apr"] },
      "6M": { points: [66, 65, 63, 60, 58, 55, 53], labels: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr"] },
      "1Y": { points: [71, 69, 67, 65, 61, 57, 53], labels: ["Apr 24", "Jun", "Aug", "Oct", "Dec", "Feb", "Apr 25"] },
    },
  },
  {
    id: "samsung-galaxy-s24-fe",
    name: "Samsung Galaxy S24 FE",
    brand: "Samsung",
    category: "Phones",
    store: "Flipkart",
    price: 34999,
    originalPrice: 41999,
    rating: 4.5,
    reviews: "3.8k",
    ram: 8,
    score: 95,
    specs: "Exynos, 8GB RAM, 256GB, AMOLED, 5G",
    status: ["Best camera", "Hot deal", "17% off"],
    affiliateUrl: "https://www.flipkart.com/",
    priceHistory: {
      "1M": { points: [41, 40, 39, 38, 36, 35, 35], labels: ["Mar 10", "Mar 17", "Mar 24", "Apr 1", "Apr 7", "Today"] },
      "3M": { points: [45, 43, 41, 39, 38, 36, 35], labels: ["Jan", "Feb", "Mar", "Apr"] },
      "6M": { points: [49, 47, 45, 42, 40, 37, 35], labels: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr"] },
      "1Y": { points: [54, 52, 49, 46, 43, 39, 35], labels: ["Apr 24", "Jun", "Aug", "Oct", "Dec", "Feb", "Apr 25"] },
    },
  },
  {
    id: "iphone-14",
    name: "Apple iPhone 14",
    brand: "Apple",
    category: "Phones",
    store: "Croma",
    price: 58999,
    originalPrice: 69900,
    rating: 4.6,
    reviews: "5.4k",
    ram: 8,
    score: 88,
    specs: "A15 Bionic, 128GB, Super Retina XDR, iOS",
    status: ["Premium pick", "15% off"],
    affiliateUrl: "https://www.croma.com/",
    priceHistory: {
      "1M": { points: [66, 65, 64, 62, 61, 59, 59], labels: ["Mar 10", "Mar 17", "Mar 24", "Apr 1", "Apr 7", "Today"] },
      "3M": { points: [72, 70, 67, 65, 63, 61, 59], labels: ["Jan", "Feb", "Mar", "Apr"] },
      "6M": { points: [76, 74, 72, 69, 66, 63, 59], labels: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr"] },
      "1Y": { points: [82, 80, 77, 74, 70, 65, 59], labels: ["Apr 24", "Jun", "Aug", "Oct", "Dec", "Feb", "Apr 25"] },
    },
  },
  {
    id: "oneplus-12r",
    name: "OnePlus 12R",
    brand: "OnePlus",
    category: "Phones",
    store: "Amazon",
    price: 39999,
    originalPrice: 45999,
    rating: 4.4,
    reviews: "1.9k",
    ram: 8,
    score: 91,
    specs: "Snapdragon 8 Gen 2, 8GB, 256GB, 120Hz AMOLED",
    status: ["Fast charging", "13% off"],
    affiliateUrl: "https://www.amazon.in/",
    priceHistory: {
      "1M": { points: [45, 44, 43, 42, 41, 40, 40], labels: ["Mar 10", "Mar 17", "Mar 24", "Apr 1", "Apr 7", "Today"] },
      "3M": { points: [49, 47, 45, 44, 43, 41, 40], labels: ["Jan", "Feb", "Mar", "Apr"] },
      "6M": { points: [53, 51, 49, 47, 45, 42, 40], labels: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr"] },
      "1Y": { points: [58, 56, 53, 50, 47, 43, 40], labels: ["Apr 24", "Jun", "Aug", "Oct", "Dec", "Feb", "Apr 25"] },
    },
  },
  {
    id: "sony-bravia-55-x74l",
    name: "Sony Bravia 55 X74L",
    brand: "Sony",
    category: "TVs",
    store: "Croma",
    price: 56990,
    originalPrice: 74900,
    rating: 4.6,
    reviews: "1.1k",
    ram: 0,
    score: 93,
    specs: '55" 4K Google TV, HDR, Dolby Audio',
    status: ["Best picture", "24% off"],
    affiliateUrl: "https://www.croma.com/",
    priceHistory: {
      "1M": { points: [72, 70, 67, 63, 60, 58, 57], labels: ["Mar 10", "Mar 17", "Mar 24", "Apr 1", "Apr 7", "Today"] },
      "3M": { points: [78, 74, 70, 67, 63, 60, 57], labels: ["Jan", "Feb", "Mar", "Apr"] },
      "6M": { points: [84, 81, 78, 74, 69, 62, 57], labels: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr"] },
      "1Y": { points: [91, 88, 84, 80, 75, 66, 57], labels: ["Apr 24", "Jun", "Aug", "Oct", "Dec", "Feb", "Apr 25"] },
    },
  },
  {
    id: "samsung-crystal-4k",
    name: "Samsung Crystal Vision 55",
    brand: "Samsung",
    category: "TVs",
    store: "Amazon",
    price: 48990,
    originalPrice: 62990,
    rating: 4.4,
    reviews: "2.6k",
    ram: 0,
    score: 90,
    specs: '55" 4K UHD, PurColor, Tizen OS',
    status: ["Festival deal", "22% off"],
    affiliateUrl: "https://www.amazon.in/",
    priceHistory: {
      "1M": { points: [61, 59, 57, 55, 52, 50, 49], labels: ["Mar 10", "Mar 17", "Mar 24", "Apr 1", "Apr 7", "Today"] },
      "3M": { points: [66, 64, 61, 59, 56, 52, 49], labels: ["Jan", "Feb", "Mar", "Apr"] },
      "6M": { points: [71, 69, 66, 63, 59, 54, 49], labels: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr"] },
      "1Y": { points: [77, 74, 71, 68, 63, 57, 49], labels: ["Apr 24", "Jun", "Aug", "Oct", "Dec", "Feb", "Apr 25"] },
    },
  },
  {
    id: "boat-nirvana-751",
    name: "boAt Nirvana 751 ANC",
    brand: "boAt",
    category: "Headphones",
    store: "Flipkart",
    price: 3499,
    originalPrice: 7990,
    rating: 4.2,
    reviews: "18k",
    ram: 0,
    score: 92,
    specs: "ANC, 65h battery, Bluetooth 5.0, dual pairing",
    status: ["Massive discount", "56% off"],
    affiliateUrl: "https://www.flipkart.com/",
    priceHistory: {
      "1M": { points: [5.4, 4.8, 4.2, 3.9, 3.7, 3.5, 3.5], labels: ["Mar 10", "Mar 17", "Mar 24", "Apr 1", "Apr 7", "Today"] },
      "3M": { points: [6.2, 5.8, 5.1, 4.6, 4.1, 3.7, 3.5], labels: ["Jan", "Feb", "Mar", "Apr"] },
      "6M": { points: [6.8, 6.4, 5.9, 5.3, 4.7, 4.0, 3.5], labels: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr"] },
      "1Y": { points: [7.4, 7.0, 6.6, 6.0, 5.2, 4.3, 3.5], labels: ["Apr 24", "Jun", "Aug", "Oct", "Dec", "Feb", "Apr 25"] },
    },
  },
  {
    id: "sony-wh-ch520",
    name: "Sony WH-CH520",
    brand: "Sony",
    category: "Headphones",
    store: "Amazon",
    price: 4490,
    originalPrice: 6990,
    rating: 4.5,
    reviews: "9.7k",
    ram: 0,
    score: 89,
    specs: "50h battery, lightweight, AAC support, app EQ",
    status: ["Balanced sound", "36% off"],
    affiliateUrl: "https://www.amazon.in/",
    priceHistory: {
      "1M": { points: [6.3, 5.8, 5.4, 5.1, 4.8, 4.6, 4.5], labels: ["Mar 10", "Mar 17", "Mar 24", "Apr 1", "Apr 7", "Today"] },
      "3M": { points: [7.0, 6.6, 6.1, 5.7, 5.2, 4.9, 4.5], labels: ["Jan", "Feb", "Mar", "Apr"] },
      "6M": { points: [7.5, 7.2, 6.8, 6.2, 5.8, 5.1, 4.5], labels: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr"] },
      "1Y": { points: [8.0, 7.8, 7.4, 7.0, 6.2, 5.3, 4.5], labels: ["Apr 24", "Jun", "Aug", "Oct", "Dec", "Feb", "Apr 25"] },
    },
  },
  {
    id: "xiaomi-pad-6",
    name: "Xiaomi Pad 6",
    brand: "Xiaomi",
    category: "Tablets",
    store: "Amazon",
    price: 26999,
    originalPrice: 34999,
    rating: 4.4,
    reviews: "4.2k",
    ram: 8,
    score: 94,
    specs: '11" 2.8K display, Snapdragon 870, 8GB, 256GB',
    status: ["Best tablet", "23% off"],
    affiliateUrl: "https://www.amazon.in/",
    priceHistory: {
      "1M": { points: [33, 31, 30, 29, 28, 27, 27], labels: ["Mar 10", "Mar 17", "Mar 24", "Apr 1", "Apr 7", "Today"] },
      "3M": { points: [37, 35, 33, 31, 30, 28, 27], labels: ["Jan", "Feb", "Mar", "Apr"] },
      "6M": { points: [40, 38, 36, 34, 31, 29, 27], labels: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr"] },
      "1Y": { points: [44, 42, 39, 36, 33, 30, 27], labels: ["Apr 24", "Jun", "Aug", "Oct", "Dec", "Feb", "Apr 25"] },
    },
  },
  {
    id: "samsung-tab-s9-fe",
    name: "Samsung Galaxy Tab S9 FE",
    brand: "Samsung",
    category: "Tablets",
    store: "Flipkart",
    price: 31999,
    originalPrice: 42999,
    rating: 4.5,
    reviews: "1.5k",
    ram: 8,
    score: 90,
    specs: '10.9" display, Exynos, S Pen included, IP68',
    status: ["Great for notes", "25% off"],
    affiliateUrl: "https://www.flipkart.com/",
    priceHistory: {
      "1M": { points: [39, 37, 36, 35, 34, 33, 32], labels: ["Mar 10", "Mar 17", "Mar 24", "Apr 1", "Apr 7", "Today"] },
      "3M": { points: [43, 41, 39, 37, 35, 34, 32], labels: ["Jan", "Feb", "Mar", "Apr"] },
      "6M": { points: [47, 45, 43, 40, 38, 35, 32], labels: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr"] },
      "1Y": { points: [52, 49, 46, 43, 39, 35, 32], labels: ["Apr 24", "Jun", "Aug", "Oct", "Dec", "Feb", "Apr 25"] },
    },
  },
  {
    id: "canon-eos-r100",
    name: "Canon EOS R100 Kit",
    brand: "Canon",
    category: "Cameras",
    store: "Reliance Digital",
    price: 42990,
    originalPrice: 52990,
    rating: 4.3,
    reviews: "620",
    ram: 0,
    score: 92,
    specs: "24.1MP mirrorless, RF-S 18-45mm lens, 4K crop video",
    status: ["Creator pick", "19% off"],
    affiliateUrl: "https://www.reliancedigital.in/",
    priceHistory: {
      "1M": { points: [52, 50, 48, 46, 45, 43, 43], labels: ["Mar 10", "Mar 17", "Mar 24", "Apr 1", "Apr 7", "Today"] },
      "3M": { points: [57, 55, 53, 50, 47, 45, 43], labels: ["Jan", "Feb", "Mar", "Apr"] },
      "6M": { points: [61, 59, 56, 54, 50, 46, 43], labels: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr"] },
      "1Y": { points: [67, 64, 61, 58, 53, 48, 43], labels: ["Apr 24", "Jun", "Aug", "Oct", "Dec", "Feb", "Apr 25"] },
    },
  },
  {
    id: "sony-zv-e10",
    name: "Sony ZV-E10",
    brand: "Sony",
    category: "Cameras",
    store: "Amazon",
    price: 58990,
    originalPrice: 69990,
    rating: 4.6,
    reviews: "2.2k",
    ram: 0,
    score: 95,
    specs: "24.2MP APS-C, flip screen, creator-focused video autofocus",
    status: ["Top rated", "16% off"],
    affiliateUrl: "https://www.amazon.in/",
    priceHistory: {
      "1M": { points: [68, 66, 64, 62, 61, 60, 59], labels: ["Mar 10", "Mar 17", "Mar 24", "Apr 1", "Apr 7", "Today"] },
      "3M": { points: [74, 71, 69, 66, 64, 61, 59], labels: ["Jan", "Feb", "Mar", "Apr"] },
      "6M": { points: [79, 76, 73, 70, 66, 62, 59], labels: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr"] },
      "1Y": { points: [85, 82, 79, 75, 70, 64, 59], labels: ["Apr 24", "Jun", "Aug", "Oct", "Dec", "Feb", "Apr 25"] },
    },
  },
];

const defaultAlerts = [
  { product: "Lenovo IdeaPad Slim 3", target: 50000, contact: "email", triggered: false },
  { product: "Samsung Galaxy S24 FE", target: 35000, contact: "sms", triggered: false },
  { product: "Apple AirPods Pro 2", target: 20000, contact: "email", triggered: true, current: 19900 },
];

const reviewerBlurbs = {
  "lenovo-ideapad-slim-3": {
    score: "9.1",
    text: "Excellent value for daily use and light coding. Build quality is solid for the price range.",
    source: "Gadgets360",
  },
  "hp-pavilion-15": {
    score: "8.6",
    text: "Ryzen multitasking feels smooth here, and battery life lands comfortably in the all-day zone.",
    source: "Digit",
  },
  "asus-vivobook-15": {
    score: "8.8",
    text: "The OLED panel is the standout feature and gives this mid-range laptop a more premium feel.",
    source: "TechRadar India",
  },
  "samsung-galaxy-s24-fe": {
    score: "9.0",
    text: "A strong camera-first phone with flagship-like polish at a much easier price point.",
    source: "91mobiles",
  },
  "sony-bravia-55-x74l": {
    score: "8.9",
    text: "Color tuning and upscaling are reliable, making it a safe premium pick for family living rooms.",
    source: "Smartprix",
  },
};

const categoryBudgets = {
  Laptops: 60000,
  Phones: 40000,
  TVs: 60000,
  Headphones: 8000,
  Tablets: 35000,
  Cameras: 65000,
};

const categoryBrandMap = {
  Laptops: ["Lenovo", "HP", "ASUS", "Dell", "Acer", "Apple"],
  Phones: ["Samsung", "Apple", "OnePlus", "Xiaomi", "vivo", "OPPO"],
  TVs: ["Sony", "Samsung", "LG", "Xiaomi", "TCL", "Hisense"],
  Headphones: ["Sony", "boAt", "JBL", "Sennheiser", "Apple", "Skullcandy"],
  Tablets: ["Xiaomi", "Samsung", "Apple", "Lenovo", "OnePlus", "realme"],
  Cameras: ["Sony", "Canon", "Nikon", "Fujifilm", "Panasonic", "GoPro"],
};

const categoryRamMap = {
  Laptops: [8, 16, 32],
  Phones: [8, 12, 16],
  TVs: [],
  Headphones: [],
  Tablets: [6, 8, 12],
  Cameras: [],
};

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

const storeClassMap = {
  Amazon: "amazon",
  Flipkart: "flipkart",
  Croma: "croma",
  "Reliance Digital": "amazon",
};

const mobileStoreOptions = ["All", "Amazon", "Flipkart", "Croma"];

const form = document.getElementById("search-form");
const queryInput = document.getElementById("query");
const searchSuggestions = document.getElementById("search-suggestions");
const queryTitle = document.getElementById("query-title");
const budgetRange = document.getElementById("budget-range");
const budgetValue = document.getElementById("budget-value");
const tabs = document.querySelectorAll(".tab");
const screens = document.querySelectorAll(".tab-screen");
const pills = document.querySelectorAll(".pill");
const chips = document.querySelectorAll(".chip");
const periodButtons = document.querySelectorAll(".period-btn");
const chart = document.getElementById("price-chart");
const priceLabels = document.getElementById("price-labels");
const compareGrid = document.getElementById("compare-grid");
const reviewStrip = document.getElementById("review-strip");
const resultsList = document.getElementById("results-list");
const resultsCount = document.getElementById("results-count");
const resultsNote = document.getElementById("results-note");
const aiModeBadge = document.getElementById("ai-mode-badge");
const aiSummary = document.getElementById("ai-summary");
const aiStatusNote = document.getElementById("ai-status-note");
const aiFilters = document.getElementById("ai-filters");
const aiSuggestions = document.getElementById("ai-suggestions");
const aiChatLog = document.getElementById("ai-chat-log");
const aiChatStatus = document.getElementById("ai-chat-status");
const aiChatForm = document.getElementById("ai-chat-form");
const aiChatInput = document.getElementById("ai-chat-input");
const sortSelect = document.getElementById("sort-select");
const barList = document.getElementById("bar-list");
const mobileResults = document.getElementById("mobile-results");
const mobileMeta = document.getElementById("mobile-meta");
const pickBadge = document.getElementById("pick-badge");
const pickName = document.getElementById("pick-name");
const pickSpecs = document.getElementById("pick-specs");
const pickRating = document.getElementById("pick-rating");
const pickDiscount = document.getElementById("pick-discount");
const pickPrice = document.getElementById("pick-price");
const pickOrig = document.getElementById("pick-orig");
const pickSave = document.getElementById("pick-save");
const pickCta = document.getElementById("pick-cta");
const priceHistoryTitle = document.getElementById("price-history-title");
const priceSummary = document.getElementById("price-summary");
const alertList = document.getElementById("alert-list");
const alertForm = document.getElementById("alert-form");
const alertProduct = document.getElementById("alert-product");
const alertTarget = document.getElementById("alert-target");
const alertContact = document.getElementById("alert-contact");
const alertMessage = document.getElementById("alert-message");
const storeCheckboxes = document.querySelectorAll("[data-store]");
const processorCheckboxes = document.querySelectorAll("[data-processor]");
const mobilePills = document.querySelectorAll(".mobile-pill");

const persistedAlerts = loadStoredValue(storageKeys.alerts, defaultAlerts);
const persistedPreferences = loadStoredValue(storageKeys.preferences, {});
const persistedRecentSearches = loadStoredValue(storageKeys.recentSearches, []);
const alerts = Array.isArray(persistedAlerts) ? persistedAlerts : [...defaultAlerts];
const recentSearches = Array.isArray(persistedRecentSearches) ? persistedRecentSearches.slice(0, 6) : [];

const initialCategory = persistedPreferences.category || "Laptops";
const initialBudget = persistedPreferences.budget || categoryBudgets[initialCategory] || 60000;

let products = [...fallbackProducts];
let backendMeta = {
  mode: "mock",
  providers: {},
};
let currentAiInsight = null;
let lastAiChatError = "";
let searchDebounceTimer = null;
let latestSearchRequest = 0;
let activeSuggestionIndex = -1;
let currentSearchSuggestions = [];

const state = {
  query: persistedPreferences.query || queryInput.value.trim(),
  category: initialCategory,
  budget: Number(initialBudget),
  sort: persistedPreferences.sort || "Best value",
  period: persistedPreferences.period || "3M",
  mobileStore: persistedPreferences.mobileStore || "All",
};

function loadStoredValue(key, fallback) {
  try {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : fallback;
  } catch {
    return fallback;
  }
}

function savePreferences() {
  try {
    localStorage.setItem(storageKeys.preferences, JSON.stringify(state));
  } catch {
    return;
  }
}

function saveAlerts() {
  try {
    localStorage.setItem(storageKeys.alerts, JSON.stringify(alerts));
  } catch {
    return;
  }
}

function saveRecentSearches() {
  try {
    localStorage.setItem(storageKeys.recentSearches, JSON.stringify(recentSearches));
  } catch {
    return;
  }
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

function inferCategoryFromQuery(query, fallbackCategory) {
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

function matchesSearchTokens(query, values) {
  const terms = tokenizeSearchText(query);
  if (!terms.length) {
    return true;
  }

  const candidateTokens = tokenizeSearchText(values.join(" "));
  return terms.every((term) => candidateTokens.some((candidate) => fuzzyTokenMatch(term, candidate)));
}

function getSuggestionPool() {
  return (products.length ? products : fallbackProducts).filter(Boolean);
}

function buildSearchSuggestions(query) {
  const trimmedQuery = String(query || "").trim();
  const pool = getSuggestionPool();
  const category = inferCategoryFromQuery(trimmedQuery, state.category);

  if (!trimmedQuery) {
    const recentMatches = recentSearches.slice(0, 5).map((item) => ({
      type: "recent",
      label: item,
      sublabel: "Recent search",
      meta: "Recent",
      price: "",
      query: item,
      product: { category: inferCategoryFromQuery(item, state.category), brand: "Recent", name: item },
    }));

    const featuredMatches = pool.slice(0, 5).map((product) => ({
      type: "product",
      label: product.name,
      sublabel: `${product.category} · ${product.store} · Trending now`,
      meta: "Trending",
      price: formatINR(product.price),
      query: product.name,
      product,
    }));

    return [...recentMatches, ...featuredMatches]
      .filter((item, index, array) => array.findIndex((entry) => entry.label === item.label) === index)
      .slice(0, 8);
  }

  const genericSuggestions = [
    `${trimmedQuery}`,
    `Best ${getCategorySingular(category)} under ${formatINR(state.budget)}`,
    `${category} with best rating`,
    `${category} for battery life`,
    `${category} for camera`,
    `${category} best value deals`,
  ].filter(Boolean);

  const productMatches = pool
    .filter((product) => matchesSearchTokens(trimmedQuery, [product.name, product.brand, product.category, product.specs]))
    .slice(0, 8)
    .map((product) => ({
      type: "product",
      label: product.name,
      sublabel: `${product.category} · ${product.store} · ${product.specs}`,
      meta: product.category,
      price: formatINR(product.price),
      query: product.name,
      product,
    }));

  const textMatches = genericSuggestions.map((item) => ({
    type: "text",
    label: item,
    sublabel: "Quick search",
    meta: "Quick search",
    price: "",
    query: item,
    product: { category, brand: category, name: item },
  }));

  const combined = [...productMatches, ...textMatches]
    .filter((item, index, array) => array.findIndex((entry) => entry.label === item.label) === index)
    .slice(0, 10);

  if (combined.length) {
    return combined;
  }

  return [
    {
      type: "text",
      label: `Search for "${trimmedQuery}"`,
      sublabel: "No close match found, run a wider search",
      meta: "No exact match",
      price: "",
      query: trimmedQuery,
      product: { category, brand: "Search", name: trimmedQuery },
    },
    {
      type: "text",
      label: `Best ${getCategorySingular(category)} under ${formatINR(state.budget)}`,
      sublabel: "Try a broader suggestion instead",
      meta: "Suggested fallback",
      price: "",
      query: `Best ${getCategorySingular(category)} under ${state.budget}`,
      product: { category, brand: "Suggested", name: category },
    },
  ];
}

function hideSearchSuggestions() {
  activeSuggestionIndex = -1;
  currentSearchSuggestions = [];
  searchSuggestions.classList.remove("visible");
  searchSuggestions.innerHTML = "";
}

function applySuggestion(query) {
  queryInput.value = query;
  if (query) {
    const existingIndex = recentSearches.findIndex((item) => item === query);
    if (existingIndex >= 0) {
      recentSearches.splice(existingIndex, 1);
    }
    recentSearches.unshift(query);
    recentSearches.splice(6);
    saveRecentSearches();
  }
  hideSearchSuggestions();
  return runSearch();
}

function renderSearchSuggestions(query) {
  currentSearchSuggestions = buildSearchSuggestions(query);
  activeSuggestionIndex = -1;

  if (!currentSearchSuggestions.length) {
    hideSearchSuggestions();
    return;
  }

  searchSuggestions.innerHTML = currentSearchSuggestions
    .map(
      (item, index) => `
        <button
          class="search-suggestion-item"
          type="button"
          data-suggestion-index="${index}"
          data-suggestion-query="${item.query.replace(/"/g, "&quot;")}"
        >
          ${getProductVisual(item.product, true)}
          <div class="search-suggestion-copy">
            <span class="search-suggestion-meta">${item.meta || ""}</span>
            <strong>${item.label}</strong>
            <span>${item.sublabel}</span>
          </div>
          <div class="search-suggestion-side">
            <span class="search-suggestion-price">${item.price || "Search"}</span>
            ${
              item.type === "recent"
                ? `<span class="search-suggestion-remove" data-remove-recent="${item.query.replace(/"/g, "&quot;")}">Remove</span>`
                : ""
            }
          </div>
        </button>
      `,
    )
    .join("");

  searchSuggestions.classList.add("visible");
}

function updateSuggestionHighlight() {
  const items = Array.from(searchSuggestions.querySelectorAll(".search-suggestion-item"));
  items.forEach((item, index) => {
    item.classList.toggle("active", index === activeSuggestionIndex);
  });
}

function moveSuggestionHighlight(direction) {
  if (!currentSearchSuggestions.length) {
    return;
  }

  if (activeSuggestionIndex === -1) {
    activeSuggestionIndex = direction > 0 ? 0 : currentSearchSuggestions.length - 1;
  } else {
    activeSuggestionIndex =
      (activeSuggestionIndex + direction + currentSearchSuggestions.length) % currentSearchSuggestions.length;
  }

  updateSuggestionHighlight();
  const activeItem = searchSuggestions.querySelector(`.search-suggestion-item[data-suggestion-index="${activeSuggestionIndex}"]`);
  activeItem?.scrollIntoView({ block: "nearest" });
}

async function loadCatalogFromApi() {
  const params = new URLSearchParams({
    q: state.query,
    category: state.category,
  });

  try {
    const response = await fetch(`/api/search?${params.toString()}`);
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const payload = await response.json();
    products = Array.isArray(payload.products) ? payload.products : [...fallbackProducts];
    backendMeta = payload.meta || backendMeta;
    return true;
  } catch (error) {
    products = [...fallbackProducts];
    backendMeta = {
      mode: "offline-fallback",
      providers: {},
      error: error.message,
    };
    return false;
  }
}

async function fetchAiInsight() {
  try {
    const response = await fetch("/api/ai/parse", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: state.query,
        category: state.category,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    currentAiInsight = await response.json();
  } catch {
    currentAiInsight = {
      mode: "heuristic",
      summary: `I interpreted this as a search for ${state.category.toLowerCase()} with the current filters.`,
      filters: {
        category: state.category,
        budget: state.budget,
        useCase: "general use",
      },
      suggestions: [
        `See the best ${state.category.toLowerCase()} matches first, then compare the rest by price and rating.`,
        "Ask AI to rank options for battery, camera, gaming, coding, student use, or value.",
        "Use alerts if your first choice is slightly above budget.",
        "Check seller quality, warranty, and return details.",
        "Keep a few close alternatives instead of focusing on only one product.",
        "Compare both top-rated and lowest-price options before deciding.",
        "Shortlist at least 3 close matches so you do not miss a better value deal.",
        "Use the assistant to compare camera, battery, gaming, or everyday use.",
      ],
      error: "AI search endpoint is unavailable right now.",
    };
  }
}

function formatINR(value) {
  return `₹${Number(value).toLocaleString("en-IN")}`;
}

function getDiscount(product) {
  return Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
}

function getSelectedStores() {
  return Array.from(storeCheckboxes)
    .filter((checkbox) => checkbox.checked)
    .map((checkbox) => checkbox.dataset.store);
}

function getSelectedProcessors() {
  return Array.from(processorCheckboxes)
    .filter((checkbox) => checkbox.checked)
    .map((checkbox) => checkbox.dataset.processor);
}

function getCategorySingular(category) {
  if (category === "Phones") return "phone";
  if (category === "Headphones") return "headphone";
  if (category === "Cameras") return "camera";
  if (category === "Tablets") return "tablet";
  if (category === "Laptops") return "laptop";
  if (category === "TVs") return "TV";
  return category.toLowerCase();
}

function updateQueryTitle() {
  queryTitle.textContent = state.query || `Best ${getCategorySingular(state.category)} under ${formatINR(state.budget)}`;
}

function setActiveCategory(category) {
  state.category = category;
  pills.forEach((pill) => pill.classList.toggle("active", pill.textContent.trim() === category));
  renderFilterChips(category);

  const categoryBudget = categoryBudgets[category] || 60000;
  budgetRange.max = String(Math.max(categoryBudget, categoryBudget + Math.round(categoryBudget * 0.5)));
  budgetRange.min = String(category === "Headphones" ? 1000 : category === "Phones" ? 15000 : 5000);

  if (!state.budget || state.budget > Number(budgetRange.max) || state.budget < Number(budgetRange.min)) {
    state.budget = categoryBudget;
  }

  budgetRange.value = String(state.budget);
  budgetValue.textContent = formatINR(state.budget);
}

function renderFilterChips(category) {
  const brandButtons = document.querySelectorAll('[data-filter-group="brand"]');
  const ramButtons = document.querySelectorAll('[data-filter-group="ram"]');
  const brandSet = new Set(categoryBrandMap[category] || []);
  const ramValues = categoryRamMap[category] || [];

  brandButtons.forEach((button, index) => {
    const nextBrand = categoryBrandMap[category]?.[index] || "";
    button.textContent = nextBrand;
    button.dataset.value = nextBrand;
    button.classList.toggle("on", index < 2 && Boolean(nextBrand));
    button.hidden = !nextBrand;
  });

  ramButtons.forEach((button, index) => {
    const nextRam = ramValues[index];
    button.textContent = nextRam ? `${nextRam} GB` : "";
    button.dataset.value = nextRam ? String(nextRam) : "";
    button.classList.toggle("on", category === "Laptops" ? nextRam === 16 : category === "Phones" ? nextRam === 8 : false);
    button.hidden = !nextRam;
  });

  document.querySelectorAll('[data-filter-group="brand"]').forEach((button) => {
    if (!button.hidden && !brandSet.has(button.dataset.value)) {
      button.classList.remove("on");
    }
  });
}

function applyQueryContext(query) {
  const matchedCategory = inferCategoryFromQuery(query, state.category);

  if (matchedCategory) {
    setActiveCategory(matchedCategory);
  }

  const budgetMatch = query.match(/₹?\s*([\d,]+)|under\s*(\d[\d,]*)/i);
  const rawBudget = budgetMatch?.[1] || budgetMatch?.[2];
  if (rawBudget) {
    const clampedBudget = Math.min(
      Number(budgetRange.max),
      Math.max(Number(budgetRange.min), Number(rawBudget.replace(/,/g, ""))),
    );
    state.budget = clampedBudget;
    budgetRange.value = String(clampedBudget);
    budgetValue.textContent = formatINR(budgetRange.value);
  }
}

function getSelectedChipValues(group) {
  return Array.from(document.querySelectorAll(`.chip.on[data-filter-group="${group}"]`))
    .map((chip) => chip.dataset.value)
    .filter(Boolean);
}

function getSelectedMinRating() {
  const values = getSelectedChipValues("rating").map(Number).sort((a, b) => b - a);
  return values[0] || 0;
}

function getProcessorLabel(product) {
  const spec = product.specs.toLowerCase();
  if (spec.includes("intel i7")) return "Intel i7";
  if (spec.includes("intel i5")) return "Intel i5";
  if (spec.includes("ryzen 7")) return "AMD Ryzen 7";
  if (spec.includes("ryzen 5")) return "AMD Ryzen 5";
  return "Other";
}

function matchesQuery(product, query) {
  return matchesSearchTokens(query, [product.name, product.brand, product.category, product.specs, product.store]);
}

function getFilteredProducts() {
  const stores = getSelectedStores();
  const brands = getSelectedChipValues("brand");
  const rams = getSelectedChipValues("ram").map(Number);
  const processors = getSelectedProcessors();
  const minRating = getSelectedMinRating();

  const filtered = products.filter((product) => {
    const matchesCategory = product.category === state.category;
    const withinBudget = product.price <= state.budget;
    const storeAllowed = stores.length === 0 || stores.includes(product.store);
    const brandAllowed = brands.length === 0 || brands.includes(product.brand);
    const ramAllowed = rams.length === 0 || product.ram === 0 || rams.includes(product.ram);
    const processorAllowed =
      state.category !== "Laptops" || processors.length === 0 || processors.includes(getProcessorLabel(product));
    const ratingAllowed = product.rating >= minRating;
    return (
      matchesCategory &&
      withinBudget &&
      storeAllowed &&
      brandAllowed &&
      ramAllowed &&
      processorAllowed &&
      ratingAllowed &&
      matchesQuery(product, state.query)
    );
  });

  switch (state.sort) {
    case "Price: low to high":
      filtered.sort((a, b) => a.price - b.price);
      break;
    case "Price: high to low":
      filtered.sort((a, b) => b.price - a.price);
      break;
    case "Top rated":
      filtered.sort((a, b) => b.rating - a.rating || b.score - a.score);
      break;
    default:
      filtered.sort((a, b) => b.score - a.score || a.price - b.price);
      break;
  }

  return filtered;
}

function renderReviewStrip(items) {
  if (!items.length) {
    reviewStrip.innerHTML = '<div class="empty-state">Reviewer highlights will appear once matching deals are available.</div>';
    return;
  }

  reviewStrip.innerHTML = items
    .map((product) => {
      const fallback = {
        score: (product.rating * 2).toFixed(1),
        text: `${product.name} stands out for its value, specs, and current store pricing.`,
        source: "Best Deal Finder",
      };
      const review = reviewerBlurbs[product.id] || fallback;
      return `
        <div class="review-row">
          <div class="review-score">${review.score}</div>
          <div>
            <div class="review-text">${review.text}</div>
            <div class="review-src">${review.source} · ${product.name}</div>
          </div>
        </div>
      `;
    })
    .join("");
}

function renderAiInsight() {
  const insight = currentAiInsight;
  if (!insight) {
    return;
  }

  aiModeBadge.textContent = insight.mode === "openai" ? "OpenAI mode" : "Heuristic mode";
  if (insight.mode === "openai") {
    aiStatusNote.textContent = "AI is connected and using OpenAI for richer search understanding.";
    aiChatStatus.textContent = lastAiChatError || "Assistant replies are being generated with OpenAI.";
  } else {
    aiStatusNote.textContent =
      insight.error || "AI is currently running in fallback mode. Add an OpenAI API key in `.env` for full assistant responses.";
    aiChatStatus.textContent =
      lastAiChatError || "Assistant replies are using fallback logic right now.";
  }
  aiSummary.textContent = insight.summary;

  aiFilters.innerHTML = [
    insight.filters?.category ? `Category: ${insight.filters.category}` : "",
    insight.filters?.budget ? `Budget: ${formatINR(insight.filters.budget)}` : "",
    insight.filters?.useCase ? `Use case: ${insight.filters.useCase}` : "",
  ]
    .filter(Boolean)
    .map((label) => `<span class="ai-filter-pill">${label}</span>`)
    .join("");

  aiSuggestions.innerHTML = (insight.suggestions || [])
    .map((item) => `<div class="ai-suggestion">${item}</div>`)
    .join("");
}

function appendAiBubble(role, text) {
  aiChatLog.insertAdjacentHTML("beforeend", `<div class="ai-bubble ${role}">${text}</div>`);
}

function getProductVisual(product, compact = false) {
  const categoryToneMap = {
    Laptops: "visual-laptop",
    Phones: "visual-phone",
    TVs: "visual-tv",
    Headphones: "visual-headphones",
    Tablets: "visual-tablet",
    Cameras: "visual-camera",
  };

  const tone = categoryToneMap[product.category] || "visual-laptop";
  const sizeClass = compact ? "product-visual compact" : "product-visual";
  const art = getProductArtDataUri(product, compact);

  return `
    <div class="${sizeClass} ${tone}" aria-hidden="true">
      <span class="product-visual-glow"></span>
      <img class="product-visual-image" src="${art}" alt="" />
      <span class="product-visual-brand">${product.brand}</span>
    </div>
  `;
}

function getCategoryGlyph(category) {
  if (category === "Laptops") return "L";
  if (category === "Phones") return "P";
  if (category === "TVs") return "TV";
  if (category === "Headphones") return "A";
  if (category === "Tablets") return "T";
  if (category === "Cameras") return "C";
  return "D";
}

function getProductArtColors(product) {
  const byCategory = {
    Laptops: ["#14324B", "#4A88C7", "#D4E6F8"],
    Phones: ["#24143C", "#7354BE", "#E7DCFF"],
    TVs: ["#11363E", "#1E918D", "#D8F6F1"],
    Headphones: ["#5D330A", "#D58933", "#FFE8C7"],
    Tablets: ["#183A52", "#5AA7C8", "#E0F4FF"],
    Cameras: ["#2E2520", "#7A6455", "#EFE2D3"],
  };
  return byCategory[product.category] || byCategory.Laptops;
}

function escapeSvgText(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function getProductArtDataUri(product, compact = false) {
  const [bgStart, bgMid, bgEnd] = getProductArtColors(product);
  const glyph = escapeSvgText(getCategoryGlyph(product.category));
  const brand = escapeSvgText(product.brand);
  const name = escapeSvgText(String(product.name || "").split(" ").slice(0, compact ? 1 : 2).join(" "));
  const store = escapeSvgText(product.store || "");
  const discount = escapeSvgText(`${getDiscount(product)}% OFF`);
  const width = compact ? 96 : 320;
  const height = compact ? 96 : 200;
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" fill="none">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="${width}" y2="${height}" gradientUnits="userSpaceOnUse">
          <stop stop-color="${bgStart}"/>
          <stop offset=".58" stop-color="${bgMid}"/>
          <stop offset="1" stop-color="${bgEnd}"/>
        </linearGradient>
      </defs>
      <rect width="${width}" height="${height}" rx="${compact ? 18 : 28}" fill="url(#bg)"/>
      <circle cx="${compact ? 74 : 250}" cy="${compact ? 22 : 40}" r="${compact ? 16 : 28}" fill="rgba(255,255,255,.16)"/>
      <rect x="${compact ? 10 : 18}" y="${compact ? 14 : 22}" width="${compact ? 34 : 68}" height="${compact ? 34 : 68}" rx="${compact ? 12 : 18}" fill="rgba(255,255,255,.18)" stroke="rgba(255,255,255,.25)"/>
      <text x="${compact ? 27 : 52}" y="${compact ? 36 : 66}" text-anchor="middle" fill="white" font-family="Arial, sans-serif" font-size="${compact ? 16 : 30}" font-weight="700">${glyph}</text>
      <rect x="${compact ? 10 : 18}" y="${compact ? 56 : 108}" width="${compact ? 76 : 184}" height="${compact ? 12 : 22}" rx="6" fill="rgba(255,255,255,.14)"/>
      ${compact ? "" : `<rect x="18" y="140" width="134" height="14" rx="7" fill="rgba(255,255,255,.12)"/>`}
      <text x="${compact ? 14 : 20}" y="${compact ? 66 : 122}" fill="white" font-family="Arial, sans-serif" font-size="${compact ? 8 : 14}" font-weight="700">${brand}</text>
      <text x="${compact ? 14 : 20}" y="${compact ? 76 : 150}" fill="rgba(255,255,255,.92)" font-family="Arial, sans-serif" font-size="${compact ? 7 : 12}" font-weight="600">${name}</text>
      ${compact ? "" : `<text x="20" y="170" fill="rgba(255,255,255,.75)" font-family="Arial, sans-serif" font-size="11">${store}</text>`}
      <rect x="${compact ? 48 : 222}" y="${compact ? 66 : 144}" width="${compact ? 38 : 82}" height="${compact ? 16 : 28}" rx="${compact ? 8 : 14}" fill="rgba(255,255,255,.92)"/>
      <text x="${compact ? 67 : 263}" y="${compact ? 77 : 163}" text-anchor="middle" fill="${bgStart}" font-family="Arial, sans-serif" font-size="${compact ? 7 : 11}" font-weight="700">${discount}</text>
    </svg>
  `;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function getCompareItems(items) {
  return items;
}

function renderBestPick(product) {
  if (!product) {
    pickBadge.textContent = "No match";
    pickName.textContent = "No products match these filters";
    pickSpecs.textContent = "Try increasing the budget, switching categories, or clearing extra filters.";
    pickRating.textContent = "0 results";
    pickDiscount.textContent = "Adjust filters";
    pickPrice.textContent = "₹0";
    pickOrig.textContent = "";
    pickSave.textContent = "";
    pickCta.textContent = "Reset filters";
    pickCta.href = "#";
    pickCta.dataset.action = "reset-filters";
    return;
  }

  pickBadge.textContent = product.status[0] || "Top pick";
  pickName.textContent = product.name;
  pickSpecs.textContent = product.specs;
  pickRating.textContent = `${product.rating}/5 rating`;
  pickDiscount.textContent = `${getDiscount(product)}% off`;
  pickPrice.textContent = formatINR(product.price);
  pickOrig.textContent = formatINR(product.originalPrice);
  pickSave.textContent = `You save ${formatINR(product.originalPrice - product.price)}`;
  pickCta.textContent = `Buy on ${product.store}`;
  pickCta.href = product.affiliateUrl;
  pickCta.dataset.action = "affiliate-link";
}

function renderCompareCards(items) {
  const compareItems = getCompareItems(items);

  if (!compareItems.length) {
    compareGrid.innerHTML = '<div class="empty-state">Comparison cards will appear here when products match your filters.</div>';
    return;
  }

  compareGrid.innerHTML = compareItems
    .map(
      (product) => `
        <article class="store-card">
          ${getProductVisual(product)}
          <div class="store-top">
            <span class="store-tag ${storeClassMap[product.store]}">${product.store}</span>
            <span class="rating">★ ${product.rating} (${product.reviews})</span>
          </div>
          <h3>${product.name}</h3>
          <p class="card-specs">${product.specs}</p>
          <div class="store-bottom">
            <div>
              <p class="store-price">${formatINR(product.price)}</p>
              <p class="store-orig">${formatINR(product.originalPrice)}</p>
            </div>
            <a class="ghost-cta" href="${product.affiliateUrl}" target="_blank" rel="noreferrer">View deal</a>
          </div>
        </article>
      `,
    )
    .join("");
}

function getTagTone(label) {
  if (label.toLowerCase().includes("stock")) return "green";
  if (label.toLowerCase().includes("off")) return "amber";
  return "blue";
}

function renderResults(items) {
  if (!items.length) {
    resultsList.innerHTML = '<div class="empty-state">No results found. Try a higher budget or fewer filters.</div>';
    return;
  }

  resultsList.innerHTML = items
    .map(
      (product, index) => `
        <article class="result-card ${index === 0 ? "top-pick" : ""}">
          <div class="result-thumb">${getProductVisual(product, true)}</div>
          <div class="result-info">
            <h3>${product.name}</h3>
            <p>${product.specs}</p>
            <div class="tag-row">
              ${product.status.map((tag) => `<span class="mini-tag ${getTagTone(tag)}">${tag}</span>`).join("")}
            </div>
          </div>
          <div class="result-price">
            <p class="store-price">${formatINR(product.price)}</p>
            <p class="store-orig">${formatINR(product.originalPrice)}</p>
            <p class="save-price">Save ${formatINR(product.originalPrice - product.price)}</p>
            <a class="primary-cta small" href="${product.affiliateUrl}" target="_blank" rel="noreferrer">Buy on ${product.store}</a>
            <button class="secondary-btn" type="button" data-alert-name="${product.name}">Set price alert</button>
          </div>
        </article>
      `,
    )
    .join("");
}

function renderStoreBars(items) {
  const top = getCompareItems(items);
  if (!top.length) {
    barList.innerHTML = '<div class="empty-state">No live store prices to compare.</div>';
    return;
  }

  const maxPrice = Math.max(...top.map((item) => item.price), 1);
  barList.innerHTML = top
    .map(
      (product) => `
        <div class="bar-row">
          <span>${product.store}</span>
          <div class="bar-track">
            <div class="bar-fill ${storeClassMap[product.store]}-fill dynamic-fill" style="width:${Math.round(
              (product.price / maxPrice) * 100,
            )}%"></div>
          </div>
          <strong>${formatINR(product.price)}</strong>
        </div>
      `,
    )
    .join("");
}

function renderMobile(items) {
  const visibleItems = state.mobileStore === "All" ? items : items.filter((item) => item.store === state.mobileStore);
  mobileMeta.textContent = `${visibleItems.length} results, sorted by ${state.sort.toLowerCase()}`;

  if (!visibleItems.length) {
    mobileResults.innerHTML = '<div class="empty-state">No mobile cards to show for the current filters.</div>';
    return;
  }

  mobileResults.innerHTML = visibleItems
    .map(
      (product) => `
        <article class="mobile-card">
          ${getProductVisual(product, true)}
          <div class="mobile-top">
            <h3>${product.name}</h3>
            <strong>${formatINR(product.price)}</strong>
          </div>
          <p>${product.specs}, ${product.store}, ★ ${product.rating}</p>
          <div class="mobile-actions">
            <a href="${product.affiliateUrl}" target="_blank" rel="noreferrer">Buy now</a>
            <button class="secondary" type="button" data-alert-name="${product.name}">Set alert</button>
          </div>
        </article>
      `,
    )
    .join("");
}

function drawChart(product, period) {
  const data = product?.priceHistory?.[period];
  if (!data) {
    chart.innerHTML = "";
    priceLabels.innerHTML = "";
    return;
  }

  const { points, labels } = data;
  const min = Math.min(...points) - 2;
  const max = Math.max(...points) + 2;
  const width = 600;
  const height = 180;
  const xPoints = points.map((_, index) => index * (width / (points.length - 1)));
  const yPoints = points.map((point) => height - ((point - min) / (max - min)) * height);
  const linePath = xPoints
    .map((xPoint, index) => `${index === 0 ? "M" : "L"}${xPoint},${yPoints[index]}`)
    .join(" ");
  const fillPath = `${linePath} L${xPoints[xPoints.length - 1]},${height} L0,${height} Z`;

  chart.innerHTML = `
    <defs>
      <linearGradient id="price-gradient" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#85B7EB" stop-opacity="0.35"></stop>
        <stop offset="100%" stop-color="#85B7EB" stop-opacity="0"></stop>
      </linearGradient>
    </defs>
    <path d="${fillPath}" fill="url(#price-gradient)"></path>
    <path d="${linePath}" stroke="#378ADD" stroke-width="3" fill="none"></path>
    ${points.map((_, index) => `<circle cx="${xPoints[index]}" cy="${yPoints[index]}" r="4" fill="#185FA5"></circle>`).join("")}
  `;

  priceLabels.innerHTML = labels.map((label) => `<span>${label}</span>`).join("");
}

function renderPriceSummary(product) {
  if (!product) {
    priceHistoryTitle.textContent = "No price history available";
    priceSummary.innerHTML = "<div><strong>Lowest:</strong> -</div><div><strong>Highest:</strong> -</div><div><strong>Current:</strong> -</div>";
    return;
  }

  priceHistoryTitle.textContent = `${product.name} price history`;
  const points = Object.values(product.priceHistory).flatMap((entry) => entry.points);
  const lowest = Math.min(...points) * 1000;
  const highest = Math.max(...points) * 1000;

  priceSummary.innerHTML = `
    <div><strong>Lowest:</strong> ${formatINR(lowest)}</div>
    <div><strong>Highest:</strong> ${formatINR(highest)}</div>
    <div><strong>Current:</strong> ${formatINR(product.price)}</div>
  `;
}

function renderAlerts() {
  alertList.innerHTML = alerts
    .map((alert, index) => {
      const isTriggered = alert.triggered;
      return `
        <div class="alert-item">
          <span class="alert-dot ${isTriggered ? "danger" : "ok"}"></span>
          <div>
            <strong>${alert.product}</strong>
            <p>${
              isTriggered
                ? `Price dropped to ${formatINR(alert.current)} and crossed your ${formatINR(alert.target)} target`
                : `Alert if price drops below ${formatINR(alert.target)} via ${alert.contact}`
            }</p>
          </div>
          <button class="text-btn ${isTriggered ? "action" : ""}" type="button" data-remove-alert="${index}">${
            isTriggered ? "Buy now" : "Remove"
          }</button>
        </div>
      `;
    })
    .join("");
}

function syncUI(items) {
  const topProduct = items[0] || null;
  renderBestPick(topProduct);
  renderCompareCards(items);
  renderReviewStrip(items);
  renderAiInsight();
  renderResults(items);
  renderStoreBars(items);
  renderMobile(items);
  renderPriceSummary(topProduct);
  drawChart(topProduct, state.period);
  resultsCount.textContent = `${items.length} ${state.category.toLowerCase()} found`;
  if (topProduct) {
    const modeLabel =
      backendMeta.mode === "mock"
        ? "mock catalog mode"
        : backendMeta.mode === "offline-fallback"
          ? "offline fallback mode"
          : "live provider mode";
    resultsNote.textContent = `Showing ${state.category.toLowerCase()} up to ${formatINR(state.budget)} in ${modeLabel}`;
  } else {
    resultsNote.textContent = "No matching products for the current search";
  }
}

function refresh() {
  const filtered = getFilteredProducts();
  syncUI(filtered);
  savePreferences();
}

async function runSearch() {
  state.query = queryInput.value.trim();
  applyQueryContext(state.query);
  updateQueryTitle();
  hideSearchSuggestions();

  const requestId = latestSearchRequest + 1;
  latestSearchRequest = requestId;

  await Promise.all([fetchAiInsight(), loadCatalogFromApi()]);

  if (requestId !== latestSearchRequest) {
    return;
  }

  refresh();
}

function setActiveTab(tabId) {
  tabs.forEach((tab) => tab.classList.toggle("active", tab.dataset.tab === tabId));
  screens.forEach((screen) => screen.classList.toggle("active", screen.id === tabId));
}

function resetFilters() {
  state.query = "";
  queryInput.value = "";
  state.sort = "Best value";
  sortSelect.value = state.sort;
  state.mobileStore = "All";
  mobilePills.forEach((pill) => pill.classList.toggle("active", pill.textContent.trim() === state.mobileStore));
  storeCheckboxes.forEach((checkbox) => {
    checkbox.checked = checkbox.dataset.store !== "Reliance Digital";
  });
  processorCheckboxes.forEach((checkbox) => {
    checkbox.checked = checkbox.dataset.processor !== "AMD Ryzen 7";
  });
  document.querySelectorAll('.chip[data-filter-group="rating"]').forEach((chip) => {
    chip.classList.toggle("on", chip.dataset.value === "4");
  });
  setActiveCategory(state.category);
  updateQueryTitle();
  alertMessage.textContent = "";
  refresh();
}

function initializeUI() {
  queryInput.value = state.query;
  sortSelect.value = state.sort;
  setActiveCategory(state.category);
  applyQueryContext(state.query);
  updateQueryTitle();
  periodButtons.forEach((button) => button.classList.toggle("active", button.dataset.period === state.period));
  mobilePills.forEach((pill) => pill.classList.toggle("active", pill.textContent.trim() === state.mobileStore));
  budgetRange.value = String(state.budget);
  budgetValue.textContent = formatINR(state.budget);
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (searchDebounceTimer) {
    clearTimeout(searchDebounceTimer);
  }
  await runSearch();
});

queryInput.addEventListener("input", () => {
  state.query = queryInput.value.trim();
  applyQueryContext(state.query);
  updateQueryTitle();
  renderSearchSuggestions(state.query);

  if (searchDebounceTimer) {
    clearTimeout(searchDebounceTimer);
  }

  searchDebounceTimer = setTimeout(() => {
    runSearch();
  }, 250);
});

queryInput.addEventListener("focus", () => {
  renderSearchSuggestions(queryInput.value.trim());
});

queryInput.addEventListener("keydown", async (event) => {
  if (!searchSuggestions.classList.contains("visible")) {
    return;
  }

  if (event.key === "ArrowDown") {
    event.preventDefault();
    moveSuggestionHighlight(1);
    return;
  }

  if (event.key === "ArrowUp") {
    event.preventDefault();
    moveSuggestionHighlight(-1);
    return;
  }

  if (event.key === "Enter" && activeSuggestionIndex >= 0) {
    event.preventDefault();
    await applySuggestion(currentSearchSuggestions[activeSuggestionIndex].query);
    return;
  }

  if (event.key === "Escape") {
    hideSearchSuggestions();
  }
});

document.addEventListener("click", async (event) => {
  const removeButton = event.target.closest("[data-remove-recent]");
  if (removeButton) {
    event.stopPropagation();
    const value = removeButton.dataset.removeRecent;
    const index = recentSearches.findIndex((item) => item === value);
    if (index >= 0) {
      recentSearches.splice(index, 1);
      saveRecentSearches();
    }
    renderSearchSuggestions(queryInput.value.trim());
    return;
  }

  const suggestionButton = event.target.closest("[data-suggestion-query]");
  if (suggestionButton) {
    await applySuggestion(suggestionButton.dataset.suggestionQuery);
    return;
  }

  if (!event.target.closest("#search-form")) {
    hideSearchSuggestions();
  }
});

searchSuggestions.addEventListener("mousemove", (event) => {
  const suggestionButton = event.target.closest("[data-suggestion-index]");
  if (!suggestionButton) {
    return;
  }

  activeSuggestionIndex = Number(suggestionButton.dataset.suggestionIndex);
  updateSuggestionHighlight();
});

searchSuggestions.addEventListener("mouseleave", () => {
  activeSuggestionIndex = -1;
  updateSuggestionHighlight();
});

budgetRange.addEventListener("input", () => {
  state.budget = Number(budgetRange.value);
  budgetValue.textContent = formatINR(state.budget);
  updateQueryTitle();
  refresh();
});

sortSelect.addEventListener("change", () => {
  state.sort = sortSelect.value;
  refresh();
});

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    setActiveTab(tab.dataset.tab);
  });
});

pills.forEach((pill) => {
  pill.addEventListener("click", async () => {
    setActiveCategory(pill.textContent.trim());
    state.query = "";
    queryInput.value = "";
    updateQueryTitle();
    await fetchAiInsight();
    await loadCatalogFromApi();
    refresh();
  });
});

chips.forEach((chip) => {
  chip.addEventListener("click", () => {
    if (chip.hidden) {
      return;
    }
    if (chip.dataset.filterGroup === "rating") {
      document
        .querySelectorAll('.chip[data-filter-group="rating"]')
        .forEach((item) => item.classList.toggle("on", item === chip));
      refresh();
      return;
    }
    chip.classList.toggle("on");
    refresh();
  });
});

storeCheckboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", refresh);
});

processorCheckboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", refresh);
});

periodButtons.forEach((button) => {
  button.addEventListener("click", () => {
    periodButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    state.period = button.dataset.period;
    const topProduct = getFilteredProducts()[0] || null;
    drawChart(topProduct, state.period);
    savePreferences();
  });
});

mobilePills.forEach((pill) => {
  pill.addEventListener("click", () => {
    state.mobileStore = pill.textContent.trim();
    mobilePills.forEach((item) => item.classList.toggle("active", item === pill));
    renderMobile(getFilteredProducts());
    savePreferences();
  });
});

pickCta.addEventListener("click", (event) => {
  if (pickCta.dataset.action === "reset-filters") {
    event.preventDefault();
    resetFilters();
  }
});

document.addEventListener("click", (event) => {
  const alertButton = event.target.closest("[data-alert-name]");
  if (alertButton) {
    alertProduct.value = alertButton.dataset.alertName;
    setActiveTab("alert");
    alertTarget.focus();
    return;
  }

  const removeButton = event.target.closest("[data-remove-alert]");
  if (removeButton && !removeButton.classList.contains("action")) {
    alerts.splice(Number(removeButton.dataset.removeAlert), 1);
    saveAlerts();
    renderAlerts();
  }
});

alertForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const product = alertProduct.value.trim();
  const targetRaw = alertTarget.value.replace(/[^\d]/g, "");
  const contact = alertContact.value.trim();

  if (!product || !targetRaw || !contact) {
    alertMessage.textContent = "Fill all alert fields to save the notification.";
    return;
  }

  alerts.unshift({
    product,
    target: Number(targetRaw),
    contact,
    triggered: false,
  });

  saveAlerts();
  alertForm.reset();
  alertMessage.textContent = `Alert created for ${product} below ${formatINR(targetRaw)}.`;
  renderAlerts();
});

aiChatForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const message = aiChatInput.value.trim();
  if (!message) {
    return;
  }

  appendAiBubble("user", message);
  aiChatInput.value = "";

  try {
    const response = await fetch("/api/ai/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message,
        products: getFilteredProducts(),
        searchState: {
          query: state.query,
          category: state.category,
          budget: state.budget,
          sort: state.sort,
        },
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const payload = await response.json();
    lastAiChatError = payload.error || "";
    renderAiInsight();
    appendAiBubble("assistant", payload.answer);
  } catch {
    lastAiChatError = "AI assistant could not be reached from the app.";
    renderAiInsight();
    appendAiBubble("assistant", "I could not reach the AI assistant just now, so I recommend comparing the top value and top-rated options first.");
  }
});

async function bootstrap() {
  initializeUI();
  renderAlerts();
  await fetchAiInsight();
  await loadCatalogFromApi();
  appendAiBubble("assistant", "Ask me which option is best for camera, battery, gaming, coding, student use, or value, and I’ll compare the current shortlist.");
  refresh();
}

bootstrap();
