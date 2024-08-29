import React from 'react';
import { TextExplode } from 'react-text-explode';

const ExplodingText = ({ text }) => {
  return (
    <div>
      <TextExplode text={text} trigger="click" />
    </div>
  );
};

export default ExplodingText;