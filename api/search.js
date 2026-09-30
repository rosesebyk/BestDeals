const { URL } = require("url");
const { loadEnvFile } = require("../src/env");
const { sendJson, handleOptions } = require("../src/http-utils");
const { searchCatalog } = require("../src/search-service");

loadEnvFile();

module.exports = async function handler(request, response) {
  if (handleOptions(request, response)) {
    return;
  }

  try {
    const requestUrl = new URL(request.url, `http://${request.headers.host || "localhost"}`);
    const results = await searchCatalog({
      query: requestUrl.searchParams.get("q") || "",
      category: requestUrl.searchParams.get("category") || "Laptops",
    });
    sendJson(response, 200, results);
  } catch (error) {
    sendJson(response, 500, {
      error: "Search failed",
      detail: error.message,
    });
  }
};
