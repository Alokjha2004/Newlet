// src/pages/Home.jsx
import { useEffect, useState } from "react";
import NewsCard from "../components/NewsCard";
import { useLocation } from "react-router-dom";

const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

export default function Home() {
  const [articles, setArticles] = useState([]);
  const location = useLocation();
  
  const query = new URLSearchParams(location.search).get("q") || "India";

  useEffect(() => {
    fetch(`https://newsapi.org/v2/everything?q=${query}&apiKey=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => setArticles(data.articles || []))
      .catch((err) => console.error(err));
  }, [query]);

  return (
    <main className="pt-24 pb-8 px-4 container mx-auto">
      <div className="flex flex-wrap gap-6 justify-center">
        {articles.length === 0 ? (
          <p className="text-gray-500">No news found.</p>
        ) : (
          articles.map((article, idx) => (
            <NewsCard key={idx} article={article} />
          ))
        )}
      </div>
    </main>
  );
}
