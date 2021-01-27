import React from 'react';
import './Main.css';

import Header from '../Header/Header.jsx';
import Search from '../Search/Search.jsx';

const Main = () => {
  return (
    <div className='main__background'>
      <Header />
      <Search />
    </div>
  );
};

export default Main;
