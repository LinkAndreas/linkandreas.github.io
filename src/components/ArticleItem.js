import React from "react";
import Link from 'next/link'
import styles from "../styles/ArticleItem.module.css";

export default function ArticleItem({ id, title, body, date }) {
  return (
    <div className={styles.articleItemContainer}>
      <div className={styles.dateContainer}>
        <h3 className="timityOrange">{date}</h3>
      </div>
      <Link href={`https://linkandreas.de/articles/${id}`}>{title}</Link>
      {body}
    </div>
  );
}
