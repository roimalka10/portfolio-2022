import React, { useEffect, useState } from "react";
import axios from "axios";
import NewsItem from "./NewsItem";
import "../css/NewsList.css";

const NewsList = () => {
  const [articles, setArticles] = useState([]);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    const getArticles = async () => {
      const response = await axios.get(
        `https://newsapi.org/v2/everything?language=en&q=fcbarcelona&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`
      );
      // const response = await axios.get(
      //   `https://newsapi.org/v2/everything?domains=skysports.com&q=messi&sortBy=publishedAt&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`
      // );
      setArticles(response.data.articles);
    };
    getArticles();
  }, []);

  return (
    <section className="news">
      <div className="wrapper">
        {articles.slice(0, 6).map((article) => {
          return (
            <NewsItem
              title={article.title}
              description={article.description}
              url={article.url}
              urlToImage={article.urlToImage}
            />
          );
        })}
        {/* <a className="reload" onClick={() => setReload(!reload)}>
          Reload Articles
        </a> */}
      </div>
    </section>
  );
};

export default NewsList;
