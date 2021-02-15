import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import './Header.css';
// components
import Navbar from '../Navbar/Navbar.jsx';
// contexts
import { CurrentUserContext } from '../../contexts/currentUserContext/currentUserContext.js';
import { CurrentPageContext } from '../../contexts/currentPageContext/currentPageContext.js';
// text constants
import { HEADER_TITLE } from '../../utils/constants.js';

const Header = (props) => {
  const currentUser = useContext(CurrentUserContext)
  const currentPage = useContext(CurrentPageContext);
  const headerStyle = `header ${currentPage.currentPageLink === '/saved-news' ? 'header_black' : ''}`;
  const headerTextStyle = `header__text ${currentPage.currentPageLink === '/saved-news' ? 'header__text_black' : ''}`;
  const headerBurgerButton = `header__burger-button ${
    currentPage.currentPageLink === '/saved-news' ? 'header__burger-button_black' : ''
  }`;

  return (
    <header className={headerStyle}>
      <Link to='/' className='header__heading'>
        <p className={headerTextStyle}>{HEADER_TITLE}</p>
      </Link>
      <Navbar username={currentUser.name} openLoginModal={props.openLoginModal} isLoggedIn={props.isLoggedIn} handleSignOut={props.handleSignOut} />
      <button className={headerBurgerButton} onClick={props.toggleAuthMenu} />
    </header>
  );
};

export default Header;
