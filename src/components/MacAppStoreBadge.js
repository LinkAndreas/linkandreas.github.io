import React from "react";
import Image from 'next/image'
import styles from "../styles/MacAppStoreBadge.module.css";

import macAppStoreBadge from "../../public/images/macAppStoreBadge.png";

export default function MacAppStoreBadge({ url }) {
  return (
    <div>
      <a href={url}>
        <Image
          className={styles.macAppStoreBadge}
          src={macAppStoreBadge}
          alt="Mac AppStore Badge"
        />
      </a>
    </div>
  );
}
