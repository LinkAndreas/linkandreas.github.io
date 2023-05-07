import fs from 'fs';
import RSS from "rss";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { articles } from '../data/ArticleData';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push('/articles');
  }, [router]);

  return null;
}

export async function getStaticProps() {
  const rssFeed = generateRssFeed();
  fs.writeFileSync('./public/rss.xml', rssFeed);
  return { props: {} };
}

function generateRssFeed() {
  const feed = new RSS({
    title: 'linkandreas.de',
    site_url: 'https://linkandreas.de',
    feed_url: 'https://linkandreas.de/rss',
  });

  articles.forEach(article => {
    feed.item({
      title: article.title,
      description: article.description,
      url: `https://linkandreas.de/articles/${article.id}`,
      date: article.date,
    });
  });

  return feed.xml({ indent: true });
}