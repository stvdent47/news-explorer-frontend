import React from 'react';
import './SavedNews.css';

import Header from '../Header/Header.jsx';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader.jsx';
import NewsCardList from '../NewsCardList/NewsCardList';

import newsCards from '../../mockData/cards.json';

const SavedNews = () => {
  return (
    <>
      <Header headerBlack={true}/>
      <SavedNewsHeader />
      <NewsCardList newsCards={newsCards} />
    </>
  )
};

export default SavedNews;