import React from 'react';
import Head from 'next/head'
import { DefaultSeo } from 'next-seo';
import NavBar from "../components/NavBar.js";
import Footer from "../components/Footer.js";
import styles from "../styles/App.module.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "../../public/styles/navBar.css";
import "../../public/styles/code.css";
import "../../public/styles/styles.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <DefaultSeo
        openGraph={{
          type: 'website',
          locale: 'en_US',
          url: 'https://www.linkandreas.de/',
          siteName: 'Andreas Link',
        }}
        twitter={{
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image',
        }}
      />
      <div className={styles.appContainer}>
        <NavBar />
        <div className={styles.content}>
          <Component {...pageProps} />
        </div>
        <Footer />
      </div>
    </>
  )
}