import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import './Navbar.css';
// text constants
import { MAIN_PAGE_NAME, SAVED_NEWS_PAGE_NAME, SIGNIN_MODAL_NAME } from '../../utils/constants.js';
// icons
import signoutIcon from '../../images/signout-icon.svg';
import signoutIconBlack from '../../images/signout-icon_black.svg';

const Navbar = (props) => {
  const location = useLocation()
  const currentPage = location.pathname;
  const isSavedPage = currentPage === '/saved-news';

  const navbarTextLinkStyle = `navbar-list__text-link ${isSavedPage ? 'navbar-list__text-link_black' : ''}`;
  const navbarTextLinkActiveStyle = `navbar-list__text-link_active ${
    isSavedPage ? 'navbar-list__text-link_active-black' : ''
  }`;
  const navbarButtonLinkStyle = `navbar-list__button-link ${isSavedPage ? 'navbar-list__button-link_black' : ''}`;
  const navbarSignoutLinkStyle = `navbar-list__button-link navbar-list__button-link_signout ${
    isSavedPage ? 'navbar-list__button-link_black' : ''
  }`;

  return (
    <nav className='navbar'>
      <ul className='navbar-list'>
        <li className='navbar-list__item'>
          <NavLink exact to='/' className={navbarTextLinkStyle} activeClassName={navbarTextLinkActiveStyle}>
            {MAIN_PAGE_NAME}
          </NavLink>
        </li>
        {props.isLoggedIn ? (
          <li className='navbar-list__item'>
            <NavLink to='/saved-news' className={navbarTextLinkStyle} activeClassName={navbarTextLinkActiveStyle}>
              {SAVED_NEWS_PAGE_NAME}
            </NavLink>
          </li>
        ) : null}

        {!props.isLoggedIn ? (
          <li className='navbar-list__item'>
            <button className={navbarButtonLinkStyle} onClick={props.openLoginModal}>
              {SIGNIN_MODAL_NAME}
            </button>
          </li>
        ) : null}
        {props.isLoggedIn ? (
          <li className='navbar-list__item'>
            <button className={navbarSignoutLinkStyle} onClick={props.onSignOut}>
              <span className='navbar-list__text-link_signout'>{props.username}</span>
              <img
                src={isSavedPage ? signoutIconBlack : signoutIcon}
                alt='иконка выхода'
                className='navbar-list__button-image'
              />
            </button>
          </li>
        ) : null}
      </ul>
    </nav>
  );
};

export default Navbar;
