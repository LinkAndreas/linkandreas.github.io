import React from "react";
import "../styles/PublicationItem.css";

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
    <div className="publicationItemContainer">
      <ul>
        <li>
          {`${authors}. `}
          <b>{title}</b>. {publishedIn}, {location}, {`${date}.`}
          {authors !== undefined || bibTexLink !== undefined ? (
            <span> </span>
          ) : null}
          {pdfLink !== undefined ? (
            <a className="timityOrange" href={pdfLink}>
              PDF
            </a>
          ) : null}
          {authors !== undefined && bibTexLink !== undefined ? (
            <span> </span>
          ) : null}
          {bibTexLink !== undefined ? (
            <a className="timityOrange" href={bibTexLink}>
              BibTex
            </a>
          ) : null}
        </li>
      </ul>
    </div>
  );
}
