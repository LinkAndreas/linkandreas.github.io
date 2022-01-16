import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { okaidia } from "react-syntax-highlighter/dist/esm/styles/prism";
import "../styles/CodeRenderer.css";

export default function CodeRenderer({node, inline, className, children, ...props}) {
  const match = /language-(\w+)/.exec(className || '')
  return !inline && match ? (
    <div className="codeBlockContainer">
      <SyntaxHighlighter
        children={String(children).replace(/\n$/, '')}
        style={okaidia}
        language={match[1]}
        PreTag="div"
        className="codeBlock"
        {...props}
      />
    </div>
  ) : (
    <code className={className} {...props}>
      {children}
    </code>
  );
}

