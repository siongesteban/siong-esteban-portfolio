import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';

import '../styles/components/menu.scss';

export default () => {
  const menuItems = [
    {
      route: '/',
      name: 'About',
      exact: true,
    },
    {
      route: '/skills',
      name: 'Skills',
    },
    {
      route: '/projects',
      name: 'Projects',
    },
    {
      route: '/not-a-coder',
      name: '!coder',
    },
    {
      route: '/contact',
      name: 'Contact',
    },
  ];

  return (
    <div className="menu">
      <ul className="menu__list">
        {menuItems.map(item => (
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
        <li>
          <a
            href="https://drive.google.com/file/d/1-ohjOpXQ_mcjbBP5oEW6cSh8onYiNQHp/view"
            rel="noopener noreferrer"
            target="_new"
            title="Download Resume"
          >
            <FontAwesomeIcon icon={faFileAlt} size="1x" />
          </a>
        </li>
      </ul>
    </div>
  );
};
