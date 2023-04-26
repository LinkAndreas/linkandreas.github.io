import React from 'react';
import Head from 'next/head'
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