import React from 'react';
import reactDom from 'react-dom';

import styles from './index.module.css';
import './global.css';


const App = () => {
  return (
    <h1 className={styles.header}>Hello Isono Takashi, Le bachelor</h1>
  )
}

reactDom.render(<App />, document.getElementById('root'));
