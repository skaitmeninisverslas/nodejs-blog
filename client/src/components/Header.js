import React, { Component } from 'react';

class Header extends Component {
  render() {
    console.log(this.props.user.about)
    return(
      <div className="TOPBAR">
        <span className="TOPBAR__button"><i className="fas fa-bars"></i></span>
        <div className="TOPBAR__branding">Skye</div>
        <div className="TOPBAR__socials">
          <i className="fab fa-instagram"></i>
          <i className="fab fa-facebook"></i>
          <i className="fas fa-search"></i>
        </div>
        <div className="TOPBAR__menu">
          <ul className="TOPBAR__menu-navigation">
            <li className="TOPBAR__menu-navigation-list"></li>
            <li></li>
            <li></li>
          </ul>
          <div className="TOPBAR__menu-about">{this.props.user.about}</div>
        </div>
      </div>
    );
  }
}

export default Header;
