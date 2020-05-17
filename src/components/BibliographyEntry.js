import React from "react";

import "../styles/BibliographyEntry.css";

export default function BibliographyEntry({ icon, alt, title, subtitle }) {
  return (
    <div className="bibliographyEntryContainer">
      <div className="verticalContainer">
        <div className="horizontalContainer">
          <img src={icon} alt={alt} className="icon" />
          <b>{title}</b>
        </div>
        {subtitle}
      </div>
    </div>
  );
}
