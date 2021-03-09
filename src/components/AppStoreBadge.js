import React from "react";
import appStoreBadge from "../../assets/images/appStoreBadge.png";
import "../styles/AppStoreBadge.css";

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
