import React, { useState, useContext } from 'react';
import './Main.css';
// components
import Header from '../Header/Header.jsx';
import Search from '../Search/Search.jsx';
import Loader from '../Loader/Loader.jsx';
import NewsCardList from '../NewsCardList/NewsCardList.jsx';
import NoSearchResults from '../NoSearchResults/NoSearchResults.jsx';
// contexts
import { CurrentPageContext } from '../../contexts/currentPageContext/currentPageContext.js';
// mock data for news card displaying
import newsCards from '../../mockData/cards.json';

const Main = (props) => {
  const currentPage = useContext(CurrentPageContext);
  currentPage.currentPageLink = '/main';

  const [isLoading, setIsLoading] = useState(true);
  setTimeout(() => {
    setIsLoading(false);
  }, 3000);

  return (
    <>
      <div className='main__background'>
        <Header
          openLoginModal={props.openLoginModal}
          toggleAuthMenu={props.toggleAuthMenu}
          isLoggedIn={props.isLoggedIn}
          handleSignOut={props.handleSignOut}
        />
        <Search />
      </div>
      {isLoading ? (
        <Loader />
      ) : newsCards.length ? (
        <NewsCardList newsCards={newsCards} isLoggedIn={props.isLoggedIn} />
      ) : (
        <NoSearchResults />
      )}
    </>
  );
};

export default Main;
