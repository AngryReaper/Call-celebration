import React from 'react';

const Recalls = (props) => (
  <div className="recalls-wrapper">
    <h1 id="recalls" className="block-title">Отзывы</h1>
    <div className="recalls-container">
      {props.appState.recalls.map((recall, index) => {
      return (
      <div className="recall-item-block" key={`recall-${index}`}>
        <div className={recall.class}>
          <p className="recall-item-title">{recall.title}</p>
          <p className="recall-item-text">{recall.text}</p>
        </div>
      </div>)
      })}
    </div>
    <p className="send-me">Присылайте ваши отзывы на E-mail: <span>{props.appState.contacts.email}</span> Буду очень признательна!</p>
  </div>
)

export default Recalls;