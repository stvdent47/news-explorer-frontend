import React from 'react';
import './SavedNews.css';

import Header from '../Header/Header.jsx';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader.jsx';
import Loader from '../Loader/Loader.jsx';
import NewsCardList from '../NewsCardList/NewsCardList.jsx';
import NoSearchResults from '../NoSearchResults/NoSearchResults.jsx';

import newsCards from '../../mockData/cards.json';

const SavedNews = () => {
  return (
    <>
      <Header headerBlack={true}/>
      <SavedNewsHeader />
      <Loader />
      <NewsCardList newsCards={newsCards} componentPage='savedNews' />
      <NoSearchResults />
    </>
  )
};

export default SavedNews;