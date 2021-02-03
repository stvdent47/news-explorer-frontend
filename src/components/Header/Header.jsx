import React from 'react';
import { NavLink } from 'react-router-dom';

import './Header.css';
import Navbar from '../Navbar/Navbar.jsx';
import { HEADER_TITLE } from '../../utils/constants.js';

const Header = (props) => {
  const headerStyle = `header ${props.headerBlack ? 'header_black' : ''}`
  const headerTextStyle = `header__text ${props.headerBlack ? 'header__text_black' : ''}`;

  return (
    <header className={headerStyle}>
      <NavLink to='/' className='header__heading'>
        <p className={headerTextStyle}>{HEADER_TITLE}</p>
      </NavLink>
      <Navbar headerBlack={props.headerBlack} username='TESTINGTESTINGTESTING' />
    </header>
  );
};

export default Header;
