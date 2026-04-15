# 🚀 BestDeals

BestDeals is a web application that helps users find the best deals on products across multiple platforms like Amazon and Flipkart.

## 🌟 Features
- 🔍 Search for products easily
- 💰 Compare prices from different platforms
- ⭐ View ratings and reviews
- ⚡ Fast and simple UI

## 🛠️ Tech Stack
- Frontend: HTML, CSS, JavaScript
- Backend: Node.js (Express-style HTTP server)
- APIs: Custom search and AI endpoints (see below)

## 📦 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/rosesebyk/BestDeals
   cd BestDeals
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   npm start
   ```

## 📑 API Endpoints

- `GET /api/health` — Health check and provider status
- `GET /api/search?q=QUERY&category=CATEGORY` — Search products
- `POST /api/ai/parse` — AI-powered query parsing
- `POST /api/ai/chat` — AI-powered chat for deal questions

## 📁 Project Structure

- `server.js` — Main server file
- `src/` — Source code for AI and search services
- `assets/` — Images and media
- `styles.css` — Main stylesheet
- `index.html`, `app.html` — Frontend HTML files

## 🤝 Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## 📄 License
MIT