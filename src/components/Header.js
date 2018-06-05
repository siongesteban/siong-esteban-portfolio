import React from 'react';
import Menu from './Menu';
import portfolioPicture from '../static/images/siong_esteban_default_060618.jpg';
import '../styles/components/header.css';

export default () => (
  <div className="header container">
    <div className="row justify-content-center">
      <div className="col-md-4">
        <img
          className="header__picture"
          src={portfolioPicture}
          alt="Siong Esteban"
        />
      </div>
    </div>
    <Menu />
  </div>
)