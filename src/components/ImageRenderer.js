import React from "react";
import "../styles/ImageRenderer.css";

export default function ImageRenderer(props) {
  return <img {...props} className="imageBlock" />;
}
