import React from 'react';
import reactDom from 'react-dom';

import './style.css';

const App = () => {
  return (
    <div>
      <h1>Hello Isono Takashi, Le bachelor</h1>
      <h2>Welcome to CV Generator</h2>
    </div>
  )
}

reactDom.render(<App />, document.getElementById('root'));
