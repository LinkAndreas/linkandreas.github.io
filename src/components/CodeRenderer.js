import React from "react";
import { Prism } from "react-syntax-highlighter";
import { okaidia } from "react-syntax-highlighter/dist/esm/styles/prism";
import "../styles/CodeRenderer.css";

export default function CodeRenderer(props) {
  const { language, value } = props;
  return (
    <div className="codeBlockContainer">
      <Prism
        language={language}
        style={okaidia}
        showLineNumbers={true}
        className="codeBlock"
      >
        {value}
      </Prism>
    </div>
  );
}
