import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/components/menu.css';

export default () => {
  const menuItems = [{
    route: '/',
    name: 'About',
    exact: true
  }, {
    route: '/skills',
    name: 'Skills'
  }, {
    route: '/not-a-coder',
    name: '!coder'
  }, {
    route: '/contact',
    name: 'Contact'
  }];

  return (
    <div className="menu">
      <ul className="menu__list">
        {menuItems.map((item) => (
          <li key={item.name}>
            <NavLink
              to={item.route}
              activeClassName="menu__item--active"
              exact={item.exact}
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}