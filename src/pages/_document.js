import React from 'react';
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="alternate" type="application/rss+xml" title="linkandreas.de: Articles about iOS development" href="/api/rss" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}