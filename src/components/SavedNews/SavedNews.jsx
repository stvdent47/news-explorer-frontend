import React, { useState, useEffect } from 'react';
// components
import Header from '../Header/Header.jsx';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader.jsx';
import Loader from '../Loader/Loader.jsx';
import NewsCardList from '../NewsCardList/NewsCardList.jsx';

const SavedNews = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [savedArticles, setSavedArticles] = useState([]);

  useEffect(() => {
    setSavedArticles(JSON.parse(localStorage.getItem('savedArticles')))
    setIsLoading(false);
  }, []);

  return (
    <>
      <Header toggleAuthMenu={props.toggleAuthMenu} isLoggedIn={props.isLoggedIn} onSignOut={props.onSignOut} />
      <SavedNewsHeader articles={savedArticles} />

      {isLoading ? (
        <Loader />
      ) : (
        <NewsCardList articles={savedArticles} deleteArticle={props.deleteArticle} setSavedArticles={setSavedArticles}/>
      )}
    </>
  );
};

export default SavedNews;
