import React from 'react';
import { Link } from 'react-router-dom';

import './HeaderAuthMenu.css';

import signoutIcon from '../../../images/signout-icon.svg';
// text constants
import { HEADER_TITLE, MAIN_PAGE_NAME, SAVED_NEWS_PAGE_NAME, SIGNIN_MODAL_NAME } from '../../../utils/constants.js';
const HeaderAuthMenu = (props) => {
  const headerAuthMenuStyle = `auth-menu ${props.isOpen ? 'auth-menu_visible' : ''}`;

  return (
    <div className={headerAuthMenuStyle}>
      <div className='auth-menu-container'>
        <div className='auth-menu__header'>
          <Link to='/' className='header__heading'>
            <p className='auth-menu__text' onClick={props.toggleAuthMenu}>
              {HEADER_TITLE}
            </p>
          </Link>
          <button className='auth-menu__close-button' onClick={props.toggleAuthMenu} />
        </div>
        <nav className='auth-menu__nav'>
          <ul className='auth-menu__list'>
            <li className='auth-menu__list-item'>
              <Link to='/' className='auth-menu__text-link' onClick={props.toggleAuthMenu}>
                {MAIN_PAGE_NAME}
              </Link>
            </li>
            <li className='auth-menu__list-item'>
              <Link to='/saved-page' className='auth-menu__text-link' onClick={props.toggleAuthMenu}>
                {SAVED_NEWS_PAGE_NAME}
              </Link>
            </li>
            <li className='auth-menu__list-item'>
              <button className='auth-menu__button-link' onClick={props.openLoginModal}>
                {SIGNIN_MODAL_NAME}
              </button>
            </li>
            <li className='auth-menu__list-item'>
              <button className='auth-menu__button-link'>
                <span className='auth-menu__button-link-text'>{props.username}</span>
                <img src={signoutIcon} alt='иконка выхода' className='auth-menu__button-link-image' />
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default HeaderAuthMenu;
