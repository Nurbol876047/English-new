const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = process.env.PORT || 8765;
const CONFIG_PATH = path.join(__dirname, "openai.local.json");
const MAX_BODY_BYTES = 12 * 1024 * 1024;

const STATIC_ROOT = __dirname;
const MIME_TYPES = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
};

function serveStaticFile(req, res) {
  const requestPath = decodeURIComponent(req.url.split("?")[0]);
  const relativePath = requestPath === "/" ? "index.html" : requestPath.replace(/^\/+/, "");
  const filePath = path.normalize(path.join(STATIC_ROOT, relativePath));

  if (!filePath.startsWith(STATIC_ROOT)) {
    sendJson(res, 403, { error: "Forbidden." });
    return;
  }

  fs.readFile(filePath, (error, data) => {
    if (error) {
      sendJson(res, 404, { error: "Not found." });
      return;
    }

    const contentType = MIME_TYPES[path.extname(filePath)] || "application/octet-stream";
    res.writeHead(200, { "Content-Type": contentType });
    res.end(data);
  });
}

function loadApiKey() {
  if (process.env.OPENAI_API_KEY) {
    return process.env.OPENAI_API_KEY;
  }

  if (!fs.existsSync(CONFIG_PATH)) {
    return null;
  }

  try {
    const raw = fs.readFileSync(CONFIG_PATH, "utf8");
    const parsed = JSON.parse(raw);
    return parsed.apiKey || null;
  } catch (error) {
    console.error("Could not read openai.local.json:", error.message);
    return null;
  }
}

function sendJson(res, status, payload) {
  const body = JSON.stringify(payload);
  res.writeHead(status, {
    "Content-Type": "application/json; charset=utf-8",
    "Content-Length": Buffer.byteLength(body),
  });
  res.end(body);
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    let total = 0;
    const chunks = [];

    req.on("data", (chunk) => {
      total += chunk.length;
      if (total > MAX_BODY_BYTES) {
        reject(new Error("Request body too large"));
        req.destroy();
        return;
      }
      chunks.push(chunk);
    });

    req.on("end", () => resolve(Buffer.concat(chunks).toString("utf8")));
    req.on("error", reject);
  });
}

async function handleChatMessage(req, res) {
  const apiKey = loadApiKey();

  if (!apiKey) {
    sendJson(res, 500, {
      error:
        "No OpenAI API key configured on the server. Copy openai.local.example.json to openai.local.json and add your key, or set the OPENAI_API_KEY environment variable.",
    });
    return;
  }

  let body;
  try {
    body = JSON.parse(await readBody(req));
  } catch (error) {
    sendJson(res, 400, { error: "Invalid request body." });
    return;
  }

  const { imageDataUrl, message } = body;
  const trimmedMessage = typeof message === "string" ? message.trim() : "";

  if (!imageDataUrl && !trimmedMessage) {
    sendJson(res, 400, { error: "Please type a message or choose a photo." });
    return;
  }

  const defaultImagePrompt =
    "Describe this photo in clear, simple English for someone learning the language. Mention the main subject, the action, and any notable details. Keep it to 2-4 sentences.";

  const content = [{ type: "text", text: trimmedMessage || defaultImagePrompt }];

  if (typeof imageDataUrl === "string" && imageDataUrl) {
    content.push({ type: "image_url", image_url: { url: imageDataUrl } });
  }

  try {
    const openaiResponse = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        max_tokens: 300,
        messages: [
          {
            role: "system",
            content:
              "You are a friendly English tutor helping a learner practice ecology vocabulary. Reply in clear, simple English.",
          },
          {
            role: "user",
            content,
          },
        ],
      }),
    });

    const data = await openaiResponse.json();

    if (!openaiResponse.ok) {
      const message = data?.error?.message || "The OpenAI request failed.";
      sendJson(res, openaiResponse.status, { error: message });
      return;
    }

    const description = data?.choices?.[0]?.message?.content?.trim();
    sendJson(res, 200, { description: description || "No response was returned." });
  } catch (error) {
    sendJson(res, 502, { error: `Could not reach OpenAI: ${error.message}` });
  }
}

const server = http.createServer((req, res) => {
  if (req.method === "POST" && req.url === "/api/chat") {
    handleChatMessage(req, res).catch((error) => {
      sendJson(res, 500, { error: error.message });
    });
    return;
  }

  if (req.method === "GET" || req.method === "HEAD") {
    serveStaticFile(req, res);
    return;
  }

  sendJson(res, 404, { error: "Not found." });
});

server.listen(PORT, () => {
  console.log(`English For Everyone server running at http://localhost:${PORT}`);
  if (!loadApiKey()) {
    console.warn(
      "Warning: no OpenAI API key found. Copy openai.local.example.json to openai.local.json and add your key, or set the OPENAI_API_KEY environment variable."
    );
  }
});
