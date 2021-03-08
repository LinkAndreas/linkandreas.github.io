import React from "react";
import "../../styles/ImageRenderer.css";

export default function ImageRenderer(props) {
  return (
    <div className="imageBlockContainer">
      <img {...props} className="imageBlock" />
    </div>
  );
}
