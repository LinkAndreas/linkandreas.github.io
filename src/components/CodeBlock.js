import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { okaidia } from "react-syntax-highlighter/dist/esm/styles/prism";
import "../styles/CodeBlock.css";

class CodeBlock extends PureComponent {
  static propTypes = {
    value: PropTypes.string.isRequired,
    language: PropTypes.string,
  };

  static defaultProps = {
    language: null,
  };

  render() {
    return (
      <div className="codeBlockContainer">
        <SyntaxHighlighter
          language={this.props.language}
          style={okaidia}
          showLineNumbers={true}
        >
          {this.props.value}
        </SyntaxHighlighter>
      </div>
    );
  }
}

export default CodeBlock;
