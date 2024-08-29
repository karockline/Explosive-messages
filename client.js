
import React from 'react';
import ReactDOM from 'react-dom';
import ExplodingText from './ExplodingText.js';

const textElements = document.querySelectorAll('.exploding-text');

textElements.forEach((element) => {
  const text = element.textContent;
  ReactDOM.render(<ExplodingText text={text} />, element);
});



