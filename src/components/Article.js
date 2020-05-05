import React from "react";
import "../styles/Article.css";

export default function Article({ title, body, date }) {
  return (
    <div className="articleContainer">
      <div className="dateContainer">
        <h3 className="timityOrange">{date}</h3>
      </div>
      <h1>{title}</h1>
      <p>{body}</p>
    </div>
  );
}
