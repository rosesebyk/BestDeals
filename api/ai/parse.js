const { loadEnvFile } = require("../../src/env");
const { sendJson, readRequestBody, handleOptions } = require("../../src/http-utils");
const { parseShoppingQuery } = require("../../src/ai-service");

loadEnvFile();

module.exports = async function handler(request, response) {
  if (handleOptions(request, response)) {
    return;
  }

  if (request.method !== "POST") {
    sendJson(response, 405, { error: "Method not allowed" });
    return;
  }

  try {
    const body = await readRequestBody(request);
    const insight = await parseShoppingQuery(body.query || "", body.category || "Laptops");
    sendJson(response, 200, insight);
  } catch (error) {
    sendJson(response, 500, { error: "AI parse failed", detail: error.message });
  }
};
