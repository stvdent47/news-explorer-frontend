import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import './Navbar.css';
import { CurrentPageContext } from '../../contexts/currentPageContext/currentPageContext.js';
import { MAIN_PAGE_NAME, SAVED_NEWS_PAGE_NAME, SIGNIN_MODAL_NAME } from '../../utils/constants.js';
import signoutIcon from '../../images/signout-icon.svg';
import signoutIconBlack from '../../images/signout-icon_black.svg';

const Navbar = (props) => {
  const currentPage = useContext(CurrentPageContext);
  const isSavedPage = currentPage.currentPageLink === '/saved-news';

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
            <img
              src={currentPage.currentPageLink === '/saved-news' ? signoutIconBlack : signoutIcon}
              alt='иконка выхода'
              className='navbar-list__button-image'
            />
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
