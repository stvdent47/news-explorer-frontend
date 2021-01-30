import React from 'react';
import { NavLink } from 'react-router-dom';
import signoutIcon from '../../images/signout-icon.svg';

import './Navbar.css';

const Navbar = (props) => {
  return (
    <nav className='navbar'>
      <ul className='navbar-list'>
        <li className='navbar-list__item'>
          <NavLink exact to='/' className='navbar-list__text-link' activeClassName='navbar-list__text-link_active'>
            Главная
          </NavLink>
        </li>
        <li className='navbar-list__item'>
          <NavLink to='/saved-news' className='navbar-list__text-link' activeClassName='navbar-list__text-link_active'>
            Сохранённые статьи
          </NavLink>
        </li>
        <li className='navbar-list__item'>
          <button className='navbar-list__button-link'>Авторизоваться</button>
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
