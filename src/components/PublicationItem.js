import React from "react";
import styles from "../styles/PublicationItem.module.css";

export default function PublicationItem({
  authors,
  title,
  publishedIn,
  location,
  date,
  pdfLink,
  bibTexLink,
}) {
  return (
    <div className={styles.publicationItemContainer}>
      <ul>
        <li>
          {`${authors}. `}
          <b>{title}</b>. {publishedIn}, {location}, {`${date}.`}
          {authors !== undefined || bibTexLink !== undefined ? (
            <span> </span>
          ) : null}
          {pdfLink !== undefined ? <a href={pdfLink}>PDF</a> : null}
          {authors !== undefined && bibTexLink !== undefined ? (
            <span> </span>
          ) : null}
          {bibTexLink !== undefined ? <a href={bibTexLink}>BibTex</a> : null}
        </li>
      </ul>
    </div>
  );
}
