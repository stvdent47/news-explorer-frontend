import React from 'react';
import './Main.css';
// components
import Header from '../Header/Header.jsx';
import Search from '../Search/Search.jsx';
import Loader from '../Loader/Loader.jsx';
import NewsCardList from '../NewsCardList/NewsCardList.jsx';
import NoSearchResults from '../NoSearchResults/NoSearchResults.jsx';
// mock data for news card displaying
import newsCards from '../../mockData/cards.json';

const Main = () => {
  return (
    <>
      <div className='main__background'>
        <Header />
        <Search />
      </div>

      <Loader />
      <NewsCardList newsCards={newsCards} componentPage='main'/>
      <NoSearchResults componentPage='main' />
    </>
  );
};

export default Main;
