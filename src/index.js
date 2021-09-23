import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import "tachyons";
import serviceWorker from "./serviceWorker.js";

import Speechapp from './components/pages/Speechapp';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Speechapp/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

serviceWorker();