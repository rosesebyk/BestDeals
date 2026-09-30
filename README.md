# BestDeals

BestDeals helps users find and compare deals across Amazon, Flipkart, Croma, and more.

## Features
- Search products by budget and category
- Compare prices across stores
- Product photos with graceful fallbacks
- AI shopping assistant (OpenAI optional)
- Ready for local Node hosting and Vercel

## Tech stack
- Frontend: HTML, CSS, JavaScript
- Backend: Node.js HTTP server locally, Vercel Serverless API routes in production

## Local setup

1. Clone the repository
2. Copy env defaults:
   ```bash
   cp .env.example .env
   ```
3. Start the server:
   ```bash
   npm start
   ```
4. Open `http://localhost:3000`

Optional: set `OPENAI_API_KEY` in `.env` for live AI answers. Without it, heuristic fallbacks still work.

## Deploy to Vercel

1. Push this repo to GitHub
2. Import the project in [Vercel](https://vercel.com)
3. Framework Preset: **Other**
4. Add env vars from `.env.example` if needed (`OPENAI_API_KEY`, affiliate keys)
5. Deploy

Static pages are served directly. API routes live under `/api/*`:
- `GET /api/health`
- `GET /api/search?q=QUERY&category=CATEGORY`
- `POST /api/ai/parse`
- `POST /api/ai/chat`

## Project structure

- `server.js` — local static + API server
- `api/` — Vercel serverless endpoints
- `src/` — search, AI, and product image helpers
- `assets/` — media and category art
- `index.html`, `app.html`, `styles.css`, `script.js` — frontend

## License
MIT
