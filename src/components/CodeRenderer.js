import React from "react";
import { useEffect, useState } from 'react'
import hljs from 'highlight.js';
import swift from 'highlight.js/lib/languages/swift';
import bash from 'highlight.js/lib/languages/bash';
import yaml from 'highlight.js/lib/languages/yaml';
import xml from 'highlight.js/lib/languages/xml';

hljs.registerLanguage('swift', swift)
hljs.registerLanguage('bash', bash)
hljs.registerLanguage('yaml', yaml)
hljs.registerLanguage('xml', xml)

export default function CodeRenderer({ inline, className, children, ...props }) {
  const [code, setCode] = useState('')
  const [match, setMatch] = useState(null)
  const [language, setLanguage] = useState(null)

  useEffect(() => setCode(String(children).replace(/\n$/, '')), [children])
  useEffect(() => setMatch(/language-(\w+)/.exec(className || '')), [className])
  useEffect(() => setLanguage(match !== null ? match[1] : null), [match])

  return (!inline && language !== null) ? (
    <div className="hljs">
      <code dangerouslySetInnerHTML={{ __html: hljs.highlight(code, { 'language': language }).value }} />
    </div>
  ) : (
    <code className={className} {...props}>
      {children}
    </code>
  );
}