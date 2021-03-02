import React from "react";
import "../styles/FeatureGrid.css";

export default function FeatureGrid({ children }) {
  return (
    <div className="featureGridContainer">
      <div className="featureGrid">{children}</div>
    </div>
  );
}
