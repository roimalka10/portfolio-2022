import React from "react";
import "../css/NewsItem.css";

const NewsItem = ({ title, description, url, urlToImage }) => {
  return (
    <div className="news-app">
      <div className="news-item">
        <img src={urlToImage} alt="image" />
        <h3>
          <a target="_blank" href={url}>
            {title}
          </a>
        </h3>
        <p>{description.substring(0, 175)}...</p>
        <a target="_blank" href={url} className="read-more-btn">
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
