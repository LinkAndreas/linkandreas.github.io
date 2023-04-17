import React from "react";
import { useParams } from "react-router-dom";
import { articles } from "../data/ArticleData.js";
import ReactMarkdown from "react-markdown";
import Metadata from "./Metadata.js";
import CodeRenderer from "./CodeRenderer.js";
import ImageRenderer from "./ImageRenderer.js";
import ParagraphRenderer from "./ParagraphRenderer.js";
import TableRenderer from "./TableRenderer.js";
import gfm from 'remark-gfm'
import "../styles/Article.css";

export default function Article() {
  let { id } = useParams();
  let article = articles.find(article => article.id === id);

  return (
    <div className="articleContainer">
      {article != null ? (
        <Metadata
          title={`${article.title} - Andreas Link`}
          description={article.description}
          children={
            <ReactMarkdown
              children={article.markdown}
              components={{
                code: CodeRenderer,
                img: ImageRenderer,
                p: ParagraphRenderer,
                table: TableRenderer,
              }}
              remarkPlugins={[gfm]}
            />
          }
        />
      ) : (
        <h1>Article not found.</h1>
      )}
    </div>
  );
}
