import React from "react";
import "../../styles/ParagraphRenderer.css";

export default function ParagraphRenderer(props) {
  return <p {...props} className="paragraphBlock" />;
}
