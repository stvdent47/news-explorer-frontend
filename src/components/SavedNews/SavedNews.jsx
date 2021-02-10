import React, { useContext } from 'react';
import './SavedNews.css';

import Header from '../Header/Header.jsx';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader.jsx';
import Loader from '../Loader/Loader.jsx';
import NewsCardList from '../NewsCardList/NewsCardList.jsx';
import NoSearchResults from '../NoSearchResults/NoSearchResults.jsx';
// contexts
import { CurrentPageContext } from '../../contexts/currentPageContext/currentPageContext.js';
// mock data
import newsCards from '../../mockData/cards.json';

const SavedNews = (props) => {
  const currentPage = useContext(CurrentPageContext);
  currentPage.currentPageLink = '/saved-news';

  return (
    <>
      <Header toggleAuthMenu={props.toggleAuthMenu} />
      <SavedNewsHeader />
      <Loader />
      <NewsCardList newsCards={newsCards} />
      <NoSearchResults />
    </>
  );
};

export default SavedNews;
