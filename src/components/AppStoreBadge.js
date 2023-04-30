import React from "react";
import Image from 'next/image'
import appStoreBadge from "../../public/images/appStoreBadge.png";
import styles from "../styles/AppStoreBadge.module.css";

export default function AppStoreBadge({ url }) {
  return (
    <div>
      <a href={url}>
        <Image
          className={styles.appStoreBadge}
          src={appStoreBadge}
          alt="AppStore Badge"
        />
      </a>
    </div>
  );
}
