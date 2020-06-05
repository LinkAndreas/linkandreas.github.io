import React from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import article1 from "../markdown/03_05_2020_article1.md";
import article2 from "../markdown/04_05_2020_article2.md";
import CodeRenderer from "./CodeRenderer.js";
import "../styles/Article.css";

export default function Article() {
  let { day, month, year, articleId } = useParams();

  let source = (() => {
    switch (`${day}/${month}/${year}/${articleId}`) {
      case "03/05/2020/article1":
        return article1;

      case "04/05/2020/article2":
        return article2;

      default:
        return null;
    }
  })();

  return (
    <div className="articleContainer">
      {source != null ? (
        <ReactMarkdown source={source} renderers={{ code: CodeRenderer }} />
      ) : (
        <h1>Article not found :(</h1>
      )}
    </div>
  );
}
