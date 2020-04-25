import React from "react";
import "../styles/Articles.css";
import { CodeBlock } from "../components/CodeBlock";

const code = `
import SwiftUI

struct MessageView: View {
    var body: some View {
        HStack(spacing: 16) {
            Text("Hello")
            Text("World")
            Text("!!!")
        }
        .font(.largeTitle)
    }
}
`;

export default function Articles() {
  return (
    <div className="articlesContainer">
      <div className="code">
        <CodeBlock code={code} language="swift" plugins={["line-numbers"]} />
      </div>
    </div>
  );
}
