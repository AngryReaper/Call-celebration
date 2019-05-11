import React from 'react';
import ReactDOM from 'react-dom';
import AppState from './AppState';
import App from './components/App';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const appState = new AppState();

ReactDOM.render(
  <App appState={appState} />, 
  document.getElementById('root')
);
