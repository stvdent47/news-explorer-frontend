import React, { useState, useEffect, useContext } from 'react';
// components
import Header from '../Header/Header.jsx';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader.jsx';
import Loader from '../Loader/Loader.jsx';
import NewsCardList from '../NewsCardList/NewsCardList.jsx';
// api
import api from '../../utils/api.js';
// contexts
import { CurrentPageContext } from '../../contexts/currentPageContext/currentPageContext.js';

const SavedNews = (props) => {
  const currentPage = useContext(CurrentPageContext);
  currentPage.currentPageLink = '/saved-news';

  const [isLoading, setIsLoading] = useState(true);
  const [savedArticles, setSavedArticles] = useState([]);

  useEffect(() => {
    setIsLoading(true);

    api
      .getSavedArticles()
      .then((articles) => setSavedArticles(articles))
      .catch((err) => console.error(err))
      .finally(setIsLoading(false));
  }, [])

  return (
    <>
      <Header toggleAuthMenu={props.toggleAuthMenu} isLoggedIn={props.isLoggedIn} handleSignOut={props.handleSignOut} />
      <SavedNewsHeader articles={savedArticles} />

      {isLoading ? <Loader /> : <NewsCardList articles={savedArticles}/>}
    </>
  );
};

export default SavedNews;
