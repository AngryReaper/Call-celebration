import React, {Component} from "react";
import {slide as Menu} from "react-burger-menu";

export default class Sidebar extends Component {

  state = {
    openMenu: false
  }

  closeMenu () {
    this.setState({openMenu: false});
  }

  isMenuOpen (state) {
    this.setState({openMenu: state.isOpen});
  };

  render() {
    return (
      <Menu onStateChange={ this.isMenuOpen.bind(this) } isOpen={ this.state.openMenu } >
        <a className="menu-item" href="#main"
           onClick={() => this.closeMenu()}>
           Главная
        </a>
  
        <a className="menu-item" href="#events"
           onClick={() => this.closeMenu()}>
           Мероприятия
        </a>
  
        <a className="menu-item" href="#gallery"
           onClick={() => this.closeMenu()}>
           Галерея
        </a>
  
        <a className="menu-item" href="#recalls"
           onClick={() => this.closeMenu()}>
           Отзывы
        </a>
  
        <a className="menu-item" href="#contacts"
           onClick={() => this.closeMenu()}>
           Контакты
        </a>
      </Menu>
    );
  }
};