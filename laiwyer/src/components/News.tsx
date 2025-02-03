"use client";
import { useEffect, useState } from "react";
import { Oswald } from "next/font/google";
import axios from "axios";

const bokor = Oswald({ weight: "400" });

const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/everything?q=Law&sortBy=publishedAt&apiKey=a4c40f76d99c4f0d825d3f90edeb3e06`
        );
        setNews(response.data.articles.slice(0, 4)); // Get top 4 news
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="w-full p-4 bg-gradient-to-b from-white to-black">
      <h2
        className={`${bokor.className} text-3xl font-bold text-black text-center mb-9`}
      >
        News and Events
      </h2>
      <div className="flex flex-wrap gap-6 justify-center">
        {news.map((article, index) => (
          <div
            key={index}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 rounded-lg shadow-lg overflow-hidden bg-black"
          >
            <img
              src={article.urlToImage || "/placeholder.jpg"}
              alt={article.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-3">
              <h3 className="text-lg font-semibold text-white">{article.title}</h3>
              <p className="text-sm text-gray-400">
                {article.description?.slice(0, 80)}...
              </p>
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 text-sm underline"
              >
                Read more
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
