import React from 'react';
import { NavLink } from 'react-router-dom';

import './Navbar.css';
import { MAIN_PAGE_NAME, SAVED_NEWS_PAGE_NAME, SIGNIN_MODAL_NAME } from '../../utils/constants.js';
import signoutIcon from '../../images/signout-icon.svg';
import signoutIconBlack from '../../images/signout-icon_black.svg';

const Navbar = (props) => {
  const navbarTextLinkStyle = `navbar-list__text-link ${props.headerBlack ? 'navbar-list__text-link_black' : ''}`;
  const navbarTextLinkActiveStyle = `navbar-list__text-link_active ${props.headerBlack ? 'navbar-list__text-link_active-black' : ''}`;
  const navbarButtonLinkStyle = `navbar-list__button-link ${props.headerBlack ? 'navbar-list__button-link_black' : ''}`;
  const navbarSignoutLinkStyle = `navbar-list__button-link navbar-list__button-link_signout ${props.headerBlack ? 'navbar-list__button-link_black' : ''}`;

  return (
    <nav className='navbar'>
      <ul className='navbar-list'>
        <li className='navbar-list__item'>
          <NavLink exact to='/' className={navbarTextLinkStyle} activeClassName={navbarTextLinkActiveStyle}>
            {MAIN_PAGE_NAME}
          </NavLink>
        </li>
        <li className='navbar-list__item'>
          <NavLink to='/saved-news' className={navbarTextLinkStyle} activeClassName={navbarTextLinkActiveStyle}>
            {SAVED_NEWS_PAGE_NAME}
          </NavLink>
        </li>
        <li className='navbar-list__item'>
          <button className={navbarButtonLinkStyle}>{SIGNIN_MODAL_NAME}</button>
        </li>
        <li className='navbar-list__item'>
          <button className={navbarSignoutLinkStyle}>
            <p className='navbar-list__text-link_signout'>{props.username}</p>
            <img src={props.headerBlack ? signoutIconBlack : signoutIcon} alt='иконка выхода' className='navbar-list__button-image' />
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
