import React from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import CodeRenderer from "./CodeRenderer.js";
import ImageRenderer from "./ImageRenderer.js";
import ParagraphRenderer from "./ParagraphRenderer.js";
import article1 from "../../assets/articles/09_03_2021/article.md";
import article2 from "../../assets/articles/16_03_2022/article.md";
import article3 from "../../assets/articles/13_11_2022/article.md";
import "../styles/Article.css";

export default function Article() {
  let { date } = useParams();

  let children = (() => {
    switch (date) {
      case "13_11_2022":
        return article3;

      case "16_03_2022":
        return article2;

      case "09_03_2021":
        return article1;

      default:
        return null;
    }
  })();

  return (
    <div className="articleContainer">
      {children != null ? (
        <ReactMarkdown
          children={children}
          components={{
            code: CodeRenderer,
            img: ImageRenderer,
            p: ParagraphRenderer,
          }}
        />
      ) : (
        <h1>Article not found :(</h1>
      )}
    </div>
  );
}
