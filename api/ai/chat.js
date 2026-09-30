const { loadEnvFile } = require("../../src/env");
const { sendJson, readRequestBody, handleOptions } = require("../../src/http-utils");
const { answerDealQuestion } = require("../../src/ai-service");

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
    const answer = await answerDealQuestion(body.message || "", body.products || [], body.searchState || {});
    sendJson(response, 200, answer);
  } catch (error) {
    sendJson(response, 500, { error: "AI chat failed", detail: error.message });
  }
};
