import React, { useState, useEffect } from "react";
import { useRouter } from 'next/router'
import { articles } from "../../../public/ArticleData.js";
import ReactMarkdown from "react-markdown";
import CodeRenderer from "../../components/CodeRenderer.js";
import ImageRenderer from "../../components/ImageRenderer.js";
import ParagraphRenderer from "../../components/ParagraphRenderer.js";
import TableRenderer from "../../components/TableRenderer.js";
import gfm from 'remark-gfm';
import styles from "../../styles/[id].module.css";

export default function Article() {
  const router = useRouter()
  const [article, setArticle] = useState(null);

  useEffect(() => setArticle(articles.find(article => article.id === router.query.id)), [router]);

  return (
    <div className={styles.articleContainer}>
      {article != null ? (
        <ReactMarkdown
          components={{
            code: CodeRenderer,
            img: ImageRenderer,
            p: ParagraphRenderer,
            table: TableRenderer,
          }}
          remarkPlugins={[gfm]}
        >
          {article.markdown}
        </ReactMarkdown>
      ) : (
        <h1>Article not found.</h1>
      )}
    </div>
  );
}
