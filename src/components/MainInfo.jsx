import React, {Component} from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import ScrollButton from './ScrollButton';

class MainInfo extends Component {

  state = {
    scrollTopVisible: false
  }

  isElementInViewport = () => {
    var rect = document.getElementById("main").getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document. documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document. documentElement.clientWidth)
    );
  }
  componentDidMount() {
    window.onscroll = () => {
      this.setState(() => ({
        scrollTopVisible: !this.isElementInViewport()
      }))
    }
  }

  render() {
    return (
      <div className="main-info-wrapper">
        <div id="main" className="main-info-block">
          <ul className="menu-block">
            {this.props.appState.menu.map((menuItem, index) => {
              return <li key={index}><AnchorLink href={menuItem.link}>{menuItem.text}</AnchorLink></li>
            })}
          </ul>
          <div className="main-info-contacts-block">
            <p className="name">{this.props.appState.contactsInfo.name}</p>
            <p className="phone">{this.props.appState.contactsInfo.phone}</p>
            <p className="email">{this.props.appState.contactsInfo.email}</p>
          </div>
        </div>
        <div className="details">
          {this.props.appState.mainInfo.map((item, index) => {
            return (
            <div className="details-block" key={'item-' + index}>
              <div className="details-photo-block">
                <img className="details-photo" src={require('../images/mainInfo/' + item.photo)} alt=""/>
                <p className="details-description">{item.description}</p>
              </div>
              <div className="details-text-block">
                <p className="details-text-title glowing-text">{item.detailsTitle}</p>
                <div className="details-text-content">
                  {item.detailsContent.map((itemText, i) => {
                    return <p key={`block-${index}-${i}`}>{itemText}</p>
                  })}
                </div>
              </div>
            </div>)
          })}
        </div>
        {this.state.scrollTopVisible && <ScrollButton scrollStepInPx="50" delayInMs="5" />}
      </div>
    )
  }
}

export default MainInfo;