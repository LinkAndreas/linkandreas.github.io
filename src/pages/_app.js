import React from 'react';
import Head from "next/head";
import { generateDefaultSeo } from "next-seo/pages";
import NavBar from "../components/NavBar.js";
import Footer from "../components/Footer.js";
import styles from "../styles/App.module.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "../../public/styles/navBar.css";
import "../../public/styles/code.css";
import "../../public/styles/styles.css";

function DefaultLayout({ children }) {
  return (
    <div className={styles.appContainer}>
      <NavBar />
      <div className={styles.content}>
        {children}
      </div>
      <Footer />
    </div>
  );
}

export default function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => <DefaultLayout>{page}</DefaultLayout>);

  return (
    <>
      <Head>
        {/* Viewport */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Next SEO tags */}
        {
          generateDefaultSeo({
            openGraph: {
              type: 'website',
              locale: 'en_US',
              url: 'https://www.linkandreas.de/',
              siteName: 'Andreas Link',
              images: []
            },
            twitter: {
              handle: '@handle',
              site: '@site',
              cardType: 'summary_large_image',
            },
          })
        }
      </Head>
      {getLayout(<Component {...pageProps} />)}
    </>
  )
}