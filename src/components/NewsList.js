import React, { useEffect, useState } from "react";
import axios from "axios";
import NewsItem from "./NewsItem";
import "../css/NewsList.css";

const NewsList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      const response = await axios.get(
        "https://newsapi.org/v2/everything?q=soccer&apiKey=37a431ef34e244c5bdf27d4419dfb299"
      );
      setArticles(response.data.articles);
    };
    getArticles();
  }, []);
  console.log(articles);
  return (
    <div>
      {articles.map((article) => {
        <NewsItem
          title={article.title}
          description={article.description}
          url={article.url}
          urlToImage={article.urlToImage}
        />;
      })}
    </div>
  );
};

export default NewsList;
