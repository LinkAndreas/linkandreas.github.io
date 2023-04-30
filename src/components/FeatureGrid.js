import React from "react";
import styles from "../styles/FeatureGrid.module.css";

export default function FeatureGrid({ children }) {
  return (
    <div className={styles.featureGridContainer}>
      <div className={styles.featureGrid}>{children}</div>
    </div>
  );
}
