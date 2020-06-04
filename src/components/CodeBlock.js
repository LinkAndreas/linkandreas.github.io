import React, { PureComponent } from "react";
import { Prism } from "react-syntax-highlighter";
import { okaidia } from "react-syntax-highlighter/dist/esm/styles/prism";
import "../styles/CodeBlock.css";

export default function CodeBlock(props) {
  const { language, value } = props;
  return (
    <div className="codeBlockContainer">
      <Prism language={language} style={okaidia} showLineNumbers={true}>
        {value}
      </Prism>
    </div>
  );
}
