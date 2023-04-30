import React from "react";
import styles from "../styles/TableRenderer.module.css";

export default function TableRenderer(props) {
    return <table {...props} className={styles.tableBlock} />;
}
