import React, { useState } from 'react';
import './Sidebar.scss';
import { sidebarLinks, sidebarSocial } from '../../constants/data';
import { Link, NavLink } from 'react-router-dom';
import { UilEyeSlash, UilEye } from '@iconscout/react-unicons';
import image from '../../constants/images';

const Sidebar = () => {
  const [isActive, setActive] = useState(true);

  const toggle = () => {
    setActive(!isActive);
  };

  return (
    <div
      // className="sidebar"
      className={isActive ? 'sidebar' : 'sidebar__closed'}
    >
      <div className="close" onClick={toggle}>
        <span>{isActive ? <UilEyeSlash /> : <UilEye />}</span>
      </div>
      <Link className="sidebar__logo" to="/">
        <img src={image.logo} alt="side-logo" />
        <span>Danijel</span>
      </Link>
      <nav className="nav">
        <ul className="nav__list">
          {sidebarLinks.map((item) => (
            <li key={item.navLink}>
              <NavLink
                className="nav__link"
                exact="true"
                to={item.toLocation}
                aria-label={item.ariaLabel}
              >
                <span className="icon">{item.navIcon}</span>
                <span className="nav__link-text">{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <ul className="social">
        {sidebarSocial.map((item) => (
          <li className="social__item" key={`link-${item.navLink}`}>
            <a
              href={item.urlLink}
              target="_blank"
              rel="noopener noreferrer"
              className="social__item-link"
            >
              <span className="icon">{item.navIcon}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
