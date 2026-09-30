const { loadEnvFile } = require("../src/env");
const { sendJson, handleOptions } = require("../src/http-utils");
const { getProviderStatus } = require("../src/search-service");

loadEnvFile();

module.exports = async function handler(request, response) {
  if (handleOptions(request, response)) {
    return;
  }

  sendJson(response, 200, {
    ok: true,
    mode: process.env.PROVIDER_MODE || "mock",
    providers: getProviderStatus(),
    checkedAt: new Date().toISOString(),
  });
};
