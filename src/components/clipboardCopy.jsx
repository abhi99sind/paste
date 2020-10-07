/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const CopyToClipBoard = () => {
  const [value, setValue] = useState('');
  const [copied, setCopied] = useState(false);

  return (
    <div>
      <CopyToClipboard text={value} onCopy={() => setCopied(true)}>
        <button type="button">Copy</button>
      </CopyToClipboard>
    </div>
  );
};

export default CopyToClipBoard;
