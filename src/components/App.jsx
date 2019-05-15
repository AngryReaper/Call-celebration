import React, { Component } from 'react';
import MainInfo from './MainInfo';
import AppState from '../AppState';
import Events from './Events';
import Gallery from './Gallery';
import Recalls from './Recalls';
import Contacts from './Contacts';

const appState = new AppState();

class App extends Component {

  render() {
    return (
      <div className="main-wrapper">
        <h1 className="main-header">Я умею делать праздник!</h1>
        <h2 className="sub-header">Проведение свадеб, юбилеев, тематических праздников</h2>
        <div className="container">
          <MainInfo appState={appState} />
          <Events appState={appState} />
          <Gallery appState={appState} />
          <Recalls appState={appState} />
          <Contacts appState={appState} />
        </div>
      </div>
    );
  }
};

export default App;
