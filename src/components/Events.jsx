import React from 'react';

const Events = (props) => (
  <div className="events-wrapper">
    <h1 id="events" className="block-title">Мероприятия</h1>
    <p className="events-subheader">У меня часто спрашивают: «Александра, а вы только свадьбы ведёте? У нас юбилей/выпускной/корпоратив...»</p>
    <p className="events-subheader-all">Я веду всё!</p>
    <div className="events-details-wrapper">
      {props.appState.events.map((item, index) => {
        return (
        <div className="events-details-block" key={index}>
          <div className="details-photo-block">
            <img className="details-photo" src={require('../images/events/' + item.photo)} alt=""/>
            <p className="details-description">{item.description}</p>
          </div>
        </div>)
      })}
    </div>
    <div className="events-extra-info">
      {props.appState.eventsExtraInfo.map((infoBlock, i) => {
        return <p className="info-block" key={i}>{infoBlock}</p>
      })}
    </div>
  </div>
);

export default Events;