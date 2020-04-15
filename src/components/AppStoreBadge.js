import React from "react";
import "../styles/AppStoreBadge.css";
import appStoreBadge from "../images/appStoreBadge.png";

export default function AppStoreBadge({ url }) {
  return (
    <div className="appStoreBadge">
      <a href={url}>
        <img
          className="appStoreBadge__image"
          src={appStoreBadge}
          alt="AppStore Badge"
        />
      </a>
    </div>
  );
}
