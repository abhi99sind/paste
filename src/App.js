/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { SyntaxHighlight, CopyToClipboard } from './components';

const App = () => {
  const [codeSnippet, setCodeSnippet] = useState('');
  const [languageSyntax, setLanguageSyntax] = useState('');
  const [theme, setTheme] = useState('default');

  return (
    <div>
      <SyntaxHighlight language={languageSyntax} codeString={codeSnippet} theme={theme}>
        Highlight
      </SyntaxHighlight>
    </div>
  );
};

export default App;
