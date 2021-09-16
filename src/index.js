import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {initialState} from "./Components/info";


ReactDOM.render(
  <React.StrictMode>
    <App state={initialState}/>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

