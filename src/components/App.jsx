import React, { Component, Suspense, lazy } from 'react';
import MainInfo from './MainInfo';
import AppState from '../AppState';
import loader from '../images/loader.gif';
const Events = lazy(() => import('./Events'));
const Gallery = lazy(() => import('./Gallery'));
const Recalls = lazy(() => import('./Recalls'));
const Contacts = lazy(() => import('./Contacts'));

const appState = new AppState();

class App extends Component {

  render() {
    return (
      <div className="main-wrapper">
        <h1 className="main-header">Я умею делать праздник!!</h1>
        <h2 className="sub-header">Проведение свадеб, юбилеев, тематических праздников</h2>
        <div className="container">
          <MainInfo appState={appState} />
          <Suspense fallback={<div className="loader"><img src={loader} alt=""/></div>}>
            <Events appState={appState} />
          </Suspense>
          <Suspense fallback={<div className="loader"><img src={loader} alt=""/></div>}>
            <Gallery appState={appState} />
          </Suspense>
          <Suspense fallback={<div className="loader"><img src={loader} alt=""/></div>}>
            <Recalls appState={appState} />
          </Suspense>
          <Suspense fallback={<div className="loader"><img src={loader} alt=""/></div>}>
            <Contacts appState={appState} />
          </Suspense>
        </div>
      </div>
    );
  }
};

export default App;