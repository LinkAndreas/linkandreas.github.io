import React from "react";
import "../styles/AppInfo.css";

export default function AppInfo({ title, subtitle, icon }) {
  return (
    <div className="appInfo">
      <img className="appInfo__appIcon" src={icon} alt="App Icon" />
      <div className="appInfo__description">
        <h1 className="appInfo__description__title">{title}</h1>
        <h2 className="appInfo__description__subtitle">{subtitle}</h2>
      </div>
    </div>
  );
}
