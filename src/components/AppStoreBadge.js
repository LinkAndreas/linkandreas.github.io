import React from "react";
import "../styles/AppStoreBadge.css";
import appStoreBadge from "../images/appStoreBadge.png";

export default function AppStoreBadge({ url }) {
  return (
    <div>
      <a href={url}>
        <img
          className="appStoreBadge"
          src={appStoreBadge}
          alt="AppStore Badge"
        />
      </a>
    </div>
  );
}
