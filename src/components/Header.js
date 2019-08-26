import React from 'react';

import Menu from './Menu';
import portfolioPicture from '../static/images/siong_esteban_default_060618.jpg';
import '../styles/components/header.scss';

export default () => (
  <div className="container">
    <div className="row justify-content-center">
      <div className="header col-sm-8 col-12">
        <div className="row justify-content-center">
          <div className="col">
            <img
              className="header__picture"
              src={portfolioPicture}
              alt="Siong Esteban"
            />
            <h1 className="header__title">Siong Esteban</h1>
          </div>
        </div>
        <Menu />
      </div>
    </div>
  </div>
);
