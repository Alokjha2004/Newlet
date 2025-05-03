// src/pages/Category.jsx
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NewsCard from "../components/NewsCard";

const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

export default function Category() {
  const { categoryId } = useParams();
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch(`https://newsapi.org/v2/everything?q=${categoryId}&apiKey=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => setArticles(data.articles || []))
      .catch((err) => console.error(err));
  }, [categoryId]);

  return (
    <main className="pt-24 pb-8 px-4 container mx-auto">
      <h2 className="text-2xl font-bold mb-6 capitalize text-center">
        {categoryId} News
      </h2>
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
