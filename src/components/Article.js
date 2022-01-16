import React from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import CodeRenderer from "./CodeRenderer.js";
import ImageRenderer from "./ImageRenderer.js";
import ParagraphRenderer from "./ParagraphRenderer.js";
import article1 from "../../assets/articles/09_03_2021/article.md";
import "../styles/Article.css";

export default function Article() {
  let { date } = useParams();

  let children = (() => {
    switch (date) {
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
