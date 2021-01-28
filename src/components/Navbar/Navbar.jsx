import React from 'react';
import { NavLink } from 'react-router-dom';

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
          <button>Авторизоваться</button>
        </li>
        <li className='navbar-list__item'>
          <button>anon</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
