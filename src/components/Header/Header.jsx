import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import './Header.css';
// components
import Navbar from '../Navbar/Navbar.jsx';
// contexts
import { CurrentUserContext } from '../../contexts/currentUserContext/currentUserContext.js';
// text constants
import { HEADER_TITLE } from '../../utils/constants.js';

const Header = (props) => {
  const location = useLocation();
  const currentPage = location.pathname;
  const currentUser = useContext(CurrentUserContext)
  const headerStyle = `header ${currentPage === '/saved-news' ? 'header_black' : ''}`;
  const headerTextStyle = `header__text ${currentPage === '/saved-news' ? 'header__text_black' : ''}`;
  const headerBurgerButton = `header__burger-button ${
    currentPage === '/saved-news' ? 'header__burger-button_black' : ''
  }`;
  const onLogoClick = () => {
    localStorage.removeItem('articles');
    localStorage.removeItem('keyword');
  }

  return (
    <header className={headerStyle}>
      <a href='/' className='header__heading' onClick={onLogoClick}>
        <p className={headerTextStyle}>{HEADER_TITLE}</p>
      </a>
      <Navbar username={currentUser.name} openLoginModal={props.openLoginModal} isLoggedIn={props.isLoggedIn} onSignOut={props.onSignOut} />
      <button className={headerBurgerButton} onClick={props.toggleAuthMenu} />
    </header>
  );
};

export default React.memo(Header);
