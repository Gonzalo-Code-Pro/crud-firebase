import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Crud from './App';
import './firebase.js'
ReactDOM.render(
  <React.StrictMode>
    <Crud />
  </React.StrictMode>,
  document.getElementById('root')
);

