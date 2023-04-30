import React from "react";
import { NextSeo } from 'next-seo';
import { articles } from "../../../public/ArticleData.js";
import ReactMarkdown from "react-markdown";
import CodeRenderer from "../../components/CodeRenderer.js";
import ImageRenderer from "../../components/ImageRenderer.js";
import ParagraphRenderer from "../../components/ParagraphRenderer.js";
import TableRenderer from "../../components/TableRenderer.js";
import gfm from 'remark-gfm';
import styles from "../../styles/[id].module.css";

export async function getStaticPaths() {
  if (process.env.SKIP_BUILD_STATIC_GENERATION) {
    return {
      paths: [],
      fallback: 'blocking',
    }
  }

  const paths = articles.map((article) => ({
    params: { id: article.id },
  }))

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const id = params.id
  const article = articles.find(article => article.id === id);

  return {
    props: { article },
  }
}

export default function Article({ article }) {
  return (
    <>
      <NextSeo
        title={article.title}
        description={article.description}
        canonical={"https://www.linkandreas.de/articles/" + article.id}
        openGraph={{
          url: "https://www.linkandreas.de/articles/" + article.id,
          title: article.title,
          description: article.description,
          images: article.images,
          siteName: 'Andreas Link',
        }}
        twitter={{
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image',
        }}
      />
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
    </>
  );
}
