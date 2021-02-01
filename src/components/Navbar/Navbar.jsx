import React from 'react';
import { NavLink } from 'react-router-dom';

import './Navbar.css';
import { MAIN_PAGE_NAME, SAVED_NEWS_PAGE_NAME, SIGNIN_MODAL_NAME } from '../../utils/constants.js';
import signoutIcon from '../../images/signout-icon.svg';

const Navbar = (props) => {
  return (
    <nav className='navbar'>
      <ul className='navbar-list'>
        <li className='navbar-list__item'>
          <NavLink exact to='/' className='navbar-list__text-link' activeClassName='navbar-list__text-link_active'>
            {MAIN_PAGE_NAME}
          </NavLink>
        </li>
        <li className='navbar-list__item'>
          <NavLink to='/saved-news' className='navbar-list__text-link' activeClassName='navbar-list__text-link_active'>
            {SAVED_NEWS_PAGE_NAME}
          </NavLink>
        </li>
        <li className='navbar-list__item'>
          <button className='navbar-list__button-link'>{SIGNIN_MODAL_NAME}</button>
        </li>
        <li className='navbar-list__item'>
          <button className='navbar-list__button-link navbar-list__button-link_signout'>
            <p className='navbar-list__text-link_signout'>{props.username}</p>
            <img src={signoutIcon} alt='иконка выхода' className='navbar-list__button-image' />
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
