import React from "react";
import { articles } from "../../../public/ArticleData.js";
import ArticleItem from "../../components/ArticleItem.js";
import styles from "../../styles/Articles.module.css";

export default function Articles() {
  return (
    <div className={styles.articlesContainer}>
      <div>
        {articles.map((article, index) => (
          <ArticleItem
            key={index}
            id={article.id}
            date={article.date}
            title={article.title}
            body={
              <div>
                {
                  article.description
                    .split("\n\n")
                    .map((line, index) => (
                      <p key={index}>{line}</p>
                    ))
                }
              </div>
            }
          />
        ))
        }
      </div>
    </div>
  );
}
