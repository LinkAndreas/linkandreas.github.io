import React from "react";
import Image from 'next/image'
import styles from "../styles/AppInfo.module.css";

export default function AppInfo({ title, subtitle, icon }) {
  return (
    <div className={styles.appInfo}>
      <Image className={styles.appInfo__appIcon} src={icon} alt="App Icon" />
      <div className={styles.appInfo__description}>
        <h1 className={styles.appInfo__description__title}>{title}</h1>
        <h2 className={styles.appInfo__description__subtitle}>{subtitle}</h2>
      </div>
    </div>
  );
}
