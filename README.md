# 📰 React News App

A responsive and modern News Web Application built using **React**, **Vite**, and **Tailwind CSS**. This app fetches real-time news articles based on different categories and search terms using the [News API](https://newsapi.org/).

## 🚀 Features

- ⚛️ Built with Vite + React
- 🎨 Styled using Tailwind CSS
- 🔍 Search functionality for news
- 🗂️ Category-wise filtering (e.g., IPL, Finance, Politics)
- 📱 Fully responsive UI (Mobile, Tablet, Desktop)
- 🧭 Intuitive Navbar with mobile menu toggle
- ⬆️ Auto scrolls to top on category change
- 🧠 Clean and maintainable code structure

---

## 🧩 Technologies Used

- [Vite](https://vitejs.dev/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Router](https://reactrouter.com/)
- [NewsAPI.org](https://newsapi.org/) (for real news data)

---

## 📦 Project Structure

```plaintext
src/
├── assets/
├── components/
│   ├── Card.jsx
│   └── Navbar.jsx
├── pages/
│   ├── Home.jsx
│   ├── Category.jsx
│   └── Search.jsx
├── App.jsx
├── main.jsx
├── index.css
```
---


## 🛠️ Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/your-username/react-news-app.git
cd react-news-app
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up .env File

- Create a .env file at the root and add your News API key:
```bash
VITE_NEWS_API_KEY=your_api_key_here
```

### 4. Run the App
```bash
npm run dev
```

Open in your browser: http://localhost:5173

