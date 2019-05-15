import React from 'react';

const Contacts = (props) => (
  <div className="contacts-wrapper">
    <h1 id="contacts" className="block-title">Контакты</h1>
    <div className="details">
      {props.appState.contacts.map((contact, index) => {
        return (
        <div className="details-block" key={'contact-' + index}>
          <div className="details-photo-block">
            <img className="details-photo" src={require('../images/contacts/' + contact.photo)} alt=""/>
            <p className="details-description">{contact.description}</p>
          </div>
          <div className="details-text-block">
            <p className="details-text-title glowing-text">{contact.detailsTitle}</p>
            <div className="details-text-content">
              {contact.detailsContent.map((itemText, i) => {
                return <p key={`contact-block-${index}-${i}`}>{itemText}</p>
              })}
            </div>
          </div>
        </div>)
      })}
    </div>
    <div className="contacts-order-block">
      <p className="order-dates">Бронь дат:</p>
      <p className="order-title">Телефон: <span className="order-text">{props.appState.contactsInfo.phone}</span></p>
      <p className="order-title">E-mail: <span className="order-text">{props.appState.contactsInfo.email}</span></p>
      <p className="order-title">VK: <span className="order-text">{props.appState.contactsInfo.vk}</span></p>
    </div>
  </div>
)

export default Contacts