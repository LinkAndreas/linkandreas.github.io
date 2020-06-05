import React from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import article from "../markdown/article.md";
import CodeBlock from "./CodeBlock.js";
import "../styles/Article.css";

export default function Article() {
  let { day, month, year, articleId } = useParams();

  let source = (() => {
    switch (`${day}/${month}/${year}/${articleId}`) {
      case "03/05/2020/article1":
        return article;

      default:
        return null;
    }
  })();

  return (
    <div className="articleContainer">
      {source != null ? (
        <ReactMarkdown source={source} renderers={{ code: CodeBlock }} />
      ) : (
        <h1>Article not found :(</h1>
      )}
    </div>
  );
}
