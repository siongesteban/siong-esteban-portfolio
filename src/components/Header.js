import React from 'react';

import Menu from './Menu';

import logo from '../static/images/siong_esteban_logo_black.svg';
import '../styles/components/header.scss';

export default () => (
  <div className="container">
    <div className="row justify-content-center">
      <div className="header col-sm-8 col-12">
        <div className="row justify-content-center">
          <div className="col">
            <img className="header__logo" src={logo} alt="Siong Esteban" />
            <h1 className="header__title">Siong Esteban</h1>
            <h2 className="header__subtitle">Full Stack Developer</h2>
          </div>
        </div>
        <Menu />
      </div>
    </div>
  </div>
);
