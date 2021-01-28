import React from 'react';
import Navbar from '../Navbar/Navbar.jsx';
import './Header.css';

const Header = () => {
  return (
    <header className='header'>
      <p className='header__heading'>NewsExplorer</p>
      <Navbar />
    </header>
  );
}

export default Header;
