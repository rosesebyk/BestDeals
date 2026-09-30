const http = require("http");
const fs = require("fs");
const path = require("path");
const { URL } = require("url");

const { loadEnvFile } = require("./src/env");
const { sendJson, readRequestBody } = require("./src/http-utils");
const { searchCatalog, getProviderStatus } = require("./src/search-service");
const { parseShoppingQuery, answerDealQuestion } = require("./src/ai-service");

loadEnvFile(path.join(__dirname, ".env"));

const rootDir = __dirname;
const port = Number(process.env.PORT || 3000);
const host = process.env.HOST || "0.0.0.0";

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".gif": "image/gif",
  ".ico": "image/x-icon",
  ".mov": "video/quicktime",
  ".mp4": "video/mp4",
  ".svg": "image/svg+xml; charset=utf-8",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
};

function sendFile(request, response, filePath) {
  fs.stat(filePath, (statError, stats) => {
    if (statError || !stats.isFile()) {
      sendJson(response, 404, { error: "Not found" });
      return;
    }

    const contentType = mimeTypes[path.extname(filePath).toLowerCase()] || "application/octet-stream";
    const range = request.headers.range;
    const cacheControl = contentType.startsWith("text/html")
      ? "no-cache"
      : "public, max-age=86400, stale-while-revalidate=604800";

    if (range) {
      const match = range.match(/bytes=(\d*)-(\d*)/);
      const start = match?.[1] ? Number(match[1]) : 0;
      const end = match?.[2] ? Number(match[2]) : stats.size - 1;

      if (!Number.isFinite(start) || !Number.isFinite(end) || start > end || end >= stats.size) {
        response.writeHead(416, {
          "Content-Range": `bytes */${stats.size}`,
        });
        response.end();
        return;
      }

      response.writeHead(206, {
        "Content-Type": contentType,
        "Content-Length": end - start + 1,
        "Content-Range": `bytes ${start}-${end}/${stats.size}`,
        "Accept-Ranges": "bytes",
        "Cache-Control": cacheControl,
      });

      fs.createReadStream(filePath, { start, end }).pipe(response);
      return;
    }

    response.writeHead(200, {
      "Content-Type": contentType,
      "Content-Length": stats.size,
      "Accept-Ranges": "bytes",
      "Cache-Control": cacheControl,
    });
    fs.createReadStream(filePath).pipe(response);
  });
}

async function handleRequest(request, response) {
  const requestUrl = new URL(request.url, `http://${request.headers.host || "localhost"}`);

  if (request.method === "OPTIONS") {
    sendJson(response, 204, {});
    return;
  }

  if (requestUrl.pathname === "/api/health") {
    sendJson(response, 200, {
      ok: true,
      mode: process.env.PROVIDER_MODE || "mock",
      providers: getProviderStatus(),
      checkedAt: new Date().toISOString(),
    });
    return;
  }

  if (requestUrl.pathname === "/api/search") {
    try {
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
    return;
  }

  if (request.method === "POST" && requestUrl.pathname === "/api/ai/parse") {
    try {
      const body = await readRequestBody(request);
      const insight = await parseShoppingQuery(body.query || "", body.category || "Laptops");
      sendJson(response, 200, insight);
    } catch (error) {
      sendJson(response, 500, { error: "AI parse failed", detail: error.message });
    }
    return;
  }

  if (request.method === "POST" && requestUrl.pathname === "/api/ai/chat") {
    try {
      const body = await readRequestBody(request);
      const answer = await answerDealQuestion(body.message || "", body.products || [], body.searchState || {});
      sendJson(response, 200, answer);
    } catch (error) {
      sendJson(response, 500, { error: "AI chat failed", detail: error.message });
    }
    return;
  }

  const safePath = requestUrl.pathname === "/" ? "/index.html" : requestUrl.pathname;
  const decodedPath = decodeURIComponent(safePath);
  const filePath = path.normalize(path.join(rootDir, decodedPath));

  if (!filePath.startsWith(rootDir)) {
    sendJson(response, 403, { error: "Forbidden" });
    return;
  }

  sendFile(request, response, filePath);
}

const server = http.createServer((request, response) => {
  handleRequest(request, response).catch((error) => {
    sendJson(response, 500, { error: "Internal server error", detail: error.message });
  });
});

if (require.main === module) {
  server.listen(port, host, () => {
    console.log(`Best Deal Finder running on http://${host === "0.0.0.0" ? "localhost" : host}:${port}`);
  });
}

module.exports = server;
