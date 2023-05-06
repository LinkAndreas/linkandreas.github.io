import React from 'react';
import fs from "fs";
import path from 'path';
import puppeteer from 'puppeteer';
import { promisify } from 'util';
import { NextSeo } from 'next-seo';
import { articles } from "../../data/ArticleData.js";
import generateLinkPreviewHTML from '../../util/LinkPreview.js';
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

  return {
    paths: paths,
    fallback: false
  }
}

const writeFile = promisify(fs.writeFile);

export async function getStaticProps({ params }) {
  const id = params.id
  const article = articles.find(article => article.id === id);
  const html = generateLinkPreviewHTML(article.title);
  const browser = await puppeteer.launch({ headless: "new" });

  try {
    const page = await browser.newPage();
    await page.setContent(html);
    await page.setViewport({ width: 1200, height: 630 });
    const image = await page.screenshot({ type: 'jpeg' });
    const imagePath = path.join(process.cwd(), 'public', 'images', 'previews', `${id}.jpeg`);
    await writeFile(imagePath, image);

    return { props: { article: article } };
  } finally {
    await browser.close();
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
          images: [
            {
              url: `https://www.linkandreas.de/images/previews/${article.id}.jpeg`,
              width: 1200,
              height: 630,
              alt: 'Link Preview Image',
            }
          ],
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