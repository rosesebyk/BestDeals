const http = require("http");
const fs = require("fs");
const path = require("path");
const { URL } = require("url");

loadEnvFile(path.join(__dirname, ".env"));

const { searchCatalog, getProviderStatus } = require("./src/search-service");
const { parseShoppingQuery, answerDealQuestion } = require("./src/ai-service");

const rootDir = __dirname;
const port = Number(process.env.PORT || 3000);
const host = process.env.HOST || "127.0.0.1";

function loadEnvFile(filePath) {
  if (!fs.existsSync(filePath)) {
    return;
  }

  const content = fs.readFileSync(filePath, "utf8");
  content.split(/\r?\n/).forEach((line) => {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) {
      return;
    }

    const separatorIndex = trimmed.indexOf("=");
    if (separatorIndex === -1) {
      return;
    }

    const key = trimmed.slice(0, separatorIndex).trim();
    let value = trimmed.slice(separatorIndex + 1).trim();

    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }

    if (!(key in process.env)) {
      process.env[key] = value;
    }
  });
}

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".mov": "video/quicktime",
  ".mp4": "video/mp4",
  ".svg": "image/svg+xml; charset=utf-8",
};

function sendJson(response, statusCode, payload) {
  response.writeHead(statusCode, {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store",
  });
  response.end(JSON.stringify(payload));
}

function sendFile(request, response, filePath) {
  fs.stat(filePath, (statError, stats) => {
    if (statError || !stats.isFile()) {
      sendJson(response, 404, { error: "Not found" });
      return;
    }

    const contentType = mimeTypes[path.extname(filePath)] || "application/octet-stream";
    const range = request.headers.range;

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
      });

      fs.createReadStream(filePath, { start, end }).pipe(response);
      return;
    }

    response.writeHead(200, {
      "Content-Type": contentType,
      "Content-Length": stats.size,
      "Accept-Ranges": "bytes",
    });
    fs.createReadStream(filePath).pipe(response);
  });
}

function readRequestBody(request) {
  return new Promise((resolve, reject) => {
    let data = "";
    request.on("data", (chunk) => {
      data += chunk;
      if (data.length > 1_000_000) {
        reject(new Error("Request body too large"));
      }
    });
    request.on("end", () => {
      try {
        resolve(data ? JSON.parse(data) : {});
      } catch (error) {
        reject(error);
      }
    });
    request.on("error", reject);
  });
}

const server = http.createServer(async (request, response) => {
  const requestUrl = new URL(request.url, `http://${request.headers.host}`);

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
  const filePath = path.join(rootDir, safePath);

  if (!filePath.startsWith(rootDir)) {
    sendJson(response, 403, { error: "Forbidden" });
    return;
  }

  sendFile(request, response, filePath);
});

server.listen(port, host, () => {
  console.log(`Best Deal Finder running on http://${host}:${port}`);
});
