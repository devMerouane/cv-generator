import React from 'react';
import reactDom from 'react-dom';

import './style.css';

const App = () => {
  return (
    <>
      <div className="image_container">
        <img src="/images/bachelor.jpeg" />
      </div>
      <div>
        <h1>Hello Issono Takashi, Le bachelor</h1>
        <h2>Welcome to CV Generator </h2>
      </div>
    </>
  )
}

reactDom.render(<App />, document.getElementById('root'));
