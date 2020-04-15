import React from "react";
import "../styles/Feature.css";

export default function Feature({ title, subtitle, icon, alt }) {
  return (
    <div className="feature">
      <img className="feature__icon" src={icon} alt={alt} />
      <div className="feature__description">
        <h2 className="feature__description__title noMargin">{title}</h2>
        <p className="feature__description_subtitle ">{subtitle}</p>
      </div>
    </div>
  );
}
