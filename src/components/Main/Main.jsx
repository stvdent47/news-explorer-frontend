import React from 'react';
import './Main.css';

import Header from '../Header/Header.jsx';
import Search from '../Search/Search.jsx';
import NewsCardList from '../NewsCardList/NewsCardList.jsx';

import newsCards from '../../mockData/cards.json';

const Main = () => {
  return (
    <>
      <div className='main__background'>
        <Header />
        <Search />
      </div>
      <NewsCardList newsCards={newsCards} />
    </>
  );
};

export default Main;
