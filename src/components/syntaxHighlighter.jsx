/* eslint-disable react/prop-types */
import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism';

const SyntaxHighlight = ({ language, codeString }) => {
  return (
    <SyntaxHighlighter language={language} style={okaidia}>
      {codeString}
    </SyntaxHighlighter>
  );
};

export default SyntaxHighlight;
