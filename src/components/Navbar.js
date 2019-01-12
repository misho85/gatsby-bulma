import React, { useState } from 'react';
import { Link } from 'gatsby';
import logo from '../img/logo.svg';

const routes = [
  {
    to: '/about',
    content: 'About'
  },
  {
    to: '/products',
    content: 'Products'
  },
  {
    to: '/blog',
    content: 'Blog'
  },
  {
    to: '/tester',
    content: 'TestPage'
  }
];

export default () => {
  const [navbarState, setNavbarState] = useState(false);

  const toggleState = (newState = !navbarState) => {
    setNavbarState(newState);
  };

  return (
    <nav
      className="navbar is-fixed-top"
      role="navigation"
      aria-label="main-navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <Link
            to="/"
            className="navbar-item"
            title="Logo"
            onClick={() => setNavbarState(false)}
          >
            <img src={logo} alt="Logo" style={{ width: '88px' }} />
          </Link>
          {/* eslint-disable */}
          <a
            onClick={() => toggleState()}
            className={`navbar-burger burger ${navbarState ? 'is-active' : ''}`}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        </div>
        <div className={`navbar-menu ${navbarState ? 'is-active' : ''}`}>
          <div className="navbar-end" onClick={() => setNavbarState(false)}>
            {routes.map(({ content, to }) => (
              <Link
                key={content}
                to={to}
                className="navbar-item"
                activeClassName="is-active"
              >
                {content}
              </Link>
            ))}
            <div className="navbar-item">
              <Link className="button is-primary is-outlined" to="/contact">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
