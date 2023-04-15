import React from "react";
import Article from "./Article.js";
import { articles } from "./ArticleData.js";
import ArticleItem from "./ArticleItem.js";
import { Routes, Route } from "react-router-dom";
import "../styles/Articles.css";

export default function Articles() {
  return (
    <div className="articlesContainer">
      <Routes>
        <Route path="" element={
          <div>
            {articles.reverse().map(article => (
              <ArticleItem
                id={article.id}
                date={article.date}
                title={article.title}
                body={
                  <div>
                    <p>
                      {article.description.split("\n\n").map((line, index) => (
                        <p key={index}>{line}</p>
                      ))}
                    </p>
                  </div>
                }
              />
            ))}
          </div>
        } />
        <Route path=":id" element={<Article />} />
      </Routes>
    </div>
  );
}
