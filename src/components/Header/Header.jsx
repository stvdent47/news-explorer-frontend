import React from 'react';
import { NavLink } from 'react-router-dom';

import './Header.css';
import Navbar from '../Navbar/Navbar.jsx';

const Header = () => {
  return (
    <header className='header'>
      <NavLink to='/' className='header__heading'>
        <p className='header__text'>NewsExplorer</p>
      </NavLink>
      <Navbar username='TESTINGTESTINGTESTING' />
    </header>
  );
};

export default Header;
