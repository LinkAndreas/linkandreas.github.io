import React from "react";
import Image from 'next/image'
import styles from "../styles/BibliographyEntry.module.css";

export default function BibliographyEntry({ icon, alt, title, subtitle }) {
  return (
    <div className={styles.bibliographyEntryContainer}>
      <div className={styles.verticalContainer}>
        <div className={styles.horizontalContainer}>
          <Image src={icon} alt={alt} className={styles.icon} />
          <b>{title}</b>
        </div>
        {subtitle}
      </div>
    </div>
  );
}
