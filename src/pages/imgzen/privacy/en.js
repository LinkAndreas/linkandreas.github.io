import React from "react";
import Head from "next/head";
import { generateNextSeo } from "next-seo/pages";
import styles from "../../../styles/ImgZen/privacy.module.css";

export default function ImgZenPrivacyEN() {
  return (
    <>
      <Head>
        {generateNextSeo({
          title: "Privacy Policy – ImgZen",
          description:
            "Privacy Policy for ImgZen by Andreas Link. ImgZen does not collect, store, or process any personal data.",
          canonical: "https://www.linkandreas.de/imgzen/privacy/en",
          openGraph: {
            url: "https://www.linkandreas.de/imgzen/privacy/en",
            title: "Privacy Policy – ImgZen",
            description:
              "Privacy Policy for ImgZen by Andreas Link.",
            siteName: "Andreas Link",
          },
        })}
      </Head>
      <div className={styles.container}>
        <h1>Privacy Policy - ImgZen</h1>
        <p>
          <strong>Effective Date:</strong> April 15, 2026
        </p>

        <p>
          ImgZen is developed and operated by{" "}
          <strong>Andreas Link</strong> (hereinafter &ldquo;we&rdquo;).
        </p>

        <p>
          Your privacy is important. This Privacy Policy explains how ImgZen
          handles your information in accordance with the General Data
          Protection Regulation (GDPR / DSGVO).
        </p>

        <h2>1. Data Collection</h2>
        <p>
          ImgZen does{" "}
          <strong>not collect, store, or process any personal data</strong>{" "}
          within the meaning of Art. 4 GDPR.
        </p>
        <ul>
          <li>No personal information is requested or required</li>
          <li>No analytics or tracking tools are used</li>
          <li>No data is transmitted to external servers</li>
        </ul>

        <h2>2. Local Data Processing</h2>
        <p>
          All image processing is performed{" "}
          <strong>locally on your device</strong>. Your files are not
          transmitted or stored externally.
        </p>

        <h2>3. Legal Basis (Art. 6 GDPR)</h2>
        <p>
          As no personal data is processed, no legal basis pursuant to
          Art. 6 GDPR is required.
        </p>

        <h2>4. Data Sharing and Third Parties</h2>
        <p>
          ImgZen does <strong>not share any data</strong> with third parties
          and does not use third-party services that process personal data.
        </p>

        <h2>5. International Data Transfers</h2>
        <p>
          No data is transferred to countries outside the European Economic
          Area (EEA).
        </p>

        <h2>6. Data Subject Rights (Art. 15–22 GDPR)</h2>
        <p>
          Under the GDPR, you generally have the right to access,
          rectification, erasure, restriction of processing, data
          portability, and objection.
        </p>
        <p>
          However, as ImgZen does not process personal data, these rights
          are not applicable in practice.
        </p>

        <h2>7. Right to Lodge a Complaint (Art. 77 GDPR)</h2>
        <p>
          You have the right to lodge a complaint with a supervisory
          authority if you believe that the processing of personal data
          violates the GDPR.
        </p>

        <h2>8. Children&rsquo;s Privacy</h2>
        <p>
          ImgZen does not knowingly collect any data from anyone, including
          children.
        </p>

        <h2>9. Changes to This Policy</h2>
        <p>
          This Privacy Policy may be updated in the future. Any changes will
          be reflected on this page.
        </p>

        <h2>10. Contact</h2>
        <p>
          If you have any questions about this Privacy Policy or data
          protection, you can contact:
        </p>
        <p>
          <strong>Andreas Link</strong>
          <br />
          Email:{" "}
          <a href="mailto:imgzen@linkandreas.de">imgzen@linkandreas.de</a>
        </p>

        <footer className={styles.footer}>
          &copy; 2026 ImgZen. All rights reserved.
        </footer>
      </div>
    </>
  );
}

ImgZenPrivacyEN.getLayout = (page) => page;
