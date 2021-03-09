import React from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import CodeRenderer from "./CustomRenderer/CodeRenderer.js";
import ImageRenderer from "./CustomRenderer/ImageRenderer.js";
import ParagraphRenderer from "./CustomRenderer/ParagraphRenderer.js";
import article1 from "../../assets/articles/09_03_2021/article.md";
import "../styles/Article.css";

export default function Article() {
  let { date } = useParams();

  let source = (() => {
    switch (date) {
      case "09_03_2021":
        return article1;

      default:
        return null;
    }
  })();

  return (
    <div className="articleContainer">
      {source != null ? (
        <ReactMarkdown
          source={source}
          renderers={{
            code: CodeRenderer,
            image: ImageRenderer,
            paragraph: ParagraphRenderer,
          }}
        />
      ) : (
        <h1>Article not found :(</h1>
      )}
    </div>
  );
}
