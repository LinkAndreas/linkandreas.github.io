import React from 'react';
import fs from "fs";
import path from 'path';
import { promisify } from 'util';
import puppeteer from 'puppeteer';
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

const writeFile = promisify(fs.writeFile);

export async function getStaticProps({ params }) {
  const id = params.id
  const article = articles.find(article => article.id === id);
  const html = getLinkPreviewHTML(article.title);
  const browser = await puppeteer.launch({ headless: "new" });

  try {
    const page = await browser.newPage();
    await page.setContent(html);
    await page.setViewport({ width: 1200, height: 630 });
    const image = await page.screenshot({ type: 'png' });
    const imagePath = path.join(process.cwd(), 'public', 'images', 'link_previews', `${id}.png`);
    await writeFile(imagePath, image);

    return {
      props: { article },
    };
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
              url: `https://www.linkandreas.de/images/link_previews/${article.id}.png`,
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

function getLinkPreviewHTML(title) {
  return `
  <!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
  </head>
  
  <body>
    <div class="templateContainer">
      <div class="contentContainer">
          <h1>${title}</h1>
          <div class="spacer"></div>
          <p><span class="highlight">linkandreas.de</span> - Articles about iOS development</p>
      </div>
    </div>
  </body>
  <style>
    * {
      margin: 0;
      padding: 0;
    }

    .spacer {
      flex: 1;
    }

    .templateContainer {
      display: flex;
      flex-flow: column nowrap;
      height: 100vh;
      align-items: start;
    }

    .contentContainer {
        display: flex;
        flex-flow: column nowrap;
        align-items: left;
        justify-content: start;
        padding-top: 10%; 
        padding-left: 5%;
        padding-right: 5%;
        padding-bottom: 10%;
        height: 100%;
        color: #e0e2e4;
        background-color: #040406;
    }

    .contentContainer p {
      font-size: 22pt;
    }

    .templateContainer h1 {
        font-size: 50pt;
    }

    .highlight {
      color: #f77f00;
    }

    .captionContainer {
      display: flex;
      flex-flow: row nowrap;
    }

    .infoTitle {
        font-size: 32pt;
    }
  </style>
</html>`
};
