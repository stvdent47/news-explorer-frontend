import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import './Header.css';
import Navbar from '../Navbar/Navbar.jsx';
import { CurrentPageContext } from '../../contexts/currentPageContext/currentPageContext.js';
import { HEADER_TITLE } from '../../utils/constants.js';

const Header = (props) => {
  const currentPage = useContext(CurrentPageContext);
  const headerStyle = `header ${currentPage.currentPageLink === '/saved-news' ? 'header_black' : ''}`;
  const headerTextStyle = `header__text ${currentPage.currentPageLink === '/saved-news' ? 'header__text_black' : ''}`;

  return (
    <header className={headerStyle}>
      <NavLink to='/' className='header__heading'>
        <p className={headerTextStyle}>{HEADER_TITLE}</p>
      </NavLink>
      <Navbar username='TESTINGTESTINGTESTING' openLoginModal={props.openLoginModal} />
    </header>
  );
};

export default Header;
