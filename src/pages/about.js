import React from "react";
import { NextSeo } from "next-seo";
import Avatar from "../components/Avatar.js";
import BibliographyEntry from "../components/BibliographyEntry.js";
import styles from "../styles/About.module.css";

import academicIcon from "../../public/images/about_academic.png";
import companyIcon from "../../public/images/about_company.png";

export default function About() {
  return (
    <>
      <NextSeo
        title="About - Link Andreas"
        canonical={"https://www.linkandreas.de/publications"}
        openGraph={{
          url: "https://www.linkandreas.de/publications",
          title: "About - Link Andreas",
          images: [],
          siteName: 'Andreas Link',
        }}
        twitter={{
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image',
        }}
      />
      <div className={styles.aboutContainer}>
        <div className={styles.aboutContent}>
          <Avatar />
          <div className={styles.biography}>
            <BibliographyEntry
              icon={companyIcon}
              alt="company"
              title="Senior Software Engineer"
              subtitle="at adesso mobile solutions GmbH, Germany"
            />
            <BibliographyEntry
              icon={academicIcon}
              alt="master"
              title="Master of Science (M.Sc. RWTH)"
              subtitle="at RWTH Aachen University, Germany"
            />
            <BibliographyEntry
              icon={academicIcon}
              alt="bachelor"
              title="Bachelor of Science (B.Sc. RWTH)"
              subtitle="at RWTH Aachen University, Germany"
            />
          </div>
        </div>
      </div >
    </>
  );
}
