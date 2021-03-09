import React from "react";
import "../styles/MacAppStoreBadge.css";
import macAppStoreBadge from "../../assets/images/macAppStoreBadge.png";

export default function MacAppStoreBadge({ url }) {
  return (
    <div>
      <a href={url}>
        <img
          className="macAppStoreBadge"
          src={macAppStoreBadge}
          alt="Mac AppStore Badge"
        />
      </a>
    </div>
  );
}
