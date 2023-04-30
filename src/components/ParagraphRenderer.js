import React from "react";
import styles from "../styles/ParagraphRenderer.module.css";

export default function ParagraphRenderer(props) {
  return <p {...props} className={styles.paragraphBlock} />;
}
