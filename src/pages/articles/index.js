import React from "react";
import { NextSeo } from "next-seo";
import { articles } from "../../../public/ArticleData.js";
import ArticleItem from "../../components/ArticleItem.js";
import styles from "../../styles/Articles.module.css";

export default function Articles() {
  return (
    <>
      <NextSeo
        title="Articles - Link Andreas"
        description="Articles about iOS Development."
        canonical={"https://www.linkandreas.de/articles"}
        openGraph={{
          url: "https://www.linkandreas.de/articles",
          title: "Articles - Link Andreas",
          description: "Articles about iOS Development.",
          images: [],
          siteName: 'Andreas Link',
        }}
        twitter={{
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image',
        }}
      />
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
    </>
  );
}
