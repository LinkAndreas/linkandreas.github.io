import React from "react";
import hljs from 'highlight.js';
import swift from 'highlight.js/lib/languages/swift';
import bash from 'highlight.js/lib/languages/bash';
import "../styles/Code.css";

export default function CodeRenderer({ node, inline, className, children, ...props }) {
  hljs.registerLanguage('swift', swift)
  hljs.registerLanguage('bash', bash)

  const code = String(children).replace(/\n$/, '')
  const match = /language-(\w+)/.exec(className || '')
  const language = match !== null ? match[1] : null

  return (!inline && language !== null) ? (
    <pre className="hljs">
      <code dangerouslySetInnerHTML={{ __html: hljs.highlight(code, { 'language': language }).value }} />
    </pre>
  ) : (
    <code className={className} {...props}>
      {children}
    </code>
  );
}