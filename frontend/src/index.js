import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SessionApp from './SessionApp'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <SessionApp />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
