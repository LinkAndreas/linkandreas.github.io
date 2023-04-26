import React from "react";
import Image from 'next/image'
import styles from "../styles/Feature.module.css";

export default function Feature({ title, subtitle, icon, alt }) {
  return (
    <div className={styles.feature}>
      <Image className={styles.feature__icon} src={icon} alt={alt} />
      <div className={styles.feature__description}>
        <h2 className={`${styles.feature__description__title} noMargin`}>{title}</h2>
        <p className={styles.feature__description_subtitle}>{subtitle}</p>
      </div>
    </div>
  );
}
