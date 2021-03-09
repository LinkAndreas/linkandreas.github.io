import React from "react";
import { Link } from "react-router-dom";
import "../styles/ArticleItem.css";

export default function ArticleItem({ title, body, date, articleUrl }) {
  return (
    <div className="articleItemContainer">
      <div className="dateContainer">
        <h3 className="timityOrange">{date}</h3>
      </div>
      <Link to={articleUrl}>{title}</Link>
      {body}
    </div>
  );
}
