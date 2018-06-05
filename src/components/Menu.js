import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/components/menu.css';

export default () => (
  <div className="menu">
    <ul className="menu__list">
      <li><NavLink to="/" exact>Me</NavLink></li>
      <li><NavLink to="/about">About</NavLink></li>
    </ul>
  </div>
)