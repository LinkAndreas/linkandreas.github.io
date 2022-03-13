import React from "react";
import hljs from "highlight.js";
import "../styles/Code.css";
import swift from "highlight.js/lib/languages/swift";

export default function CodeRenderer({node, inline, className, children, ...props}) {
  const content = String(children).replace(/\n$/, '')
  hljs.registerLanguage('swift', swift)
  const highlighted = hljs.highlight('swift', content)
  return !inline ? (
    <div className="codeBlockContainer">
        <pre className="hljs">
          <code dangerouslySetInnerHTML={{ __html: highlighted.value }} />
        </pre>
    </div>
  ) : (
    <code className={className} {...props}>
      {children}
    </code>
  );
}