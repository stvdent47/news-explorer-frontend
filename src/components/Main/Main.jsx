import React, { useState } from 'react';
import './Main.css';
// components
import Header from '../Header/Header.jsx';
import Search from '../Search/Search.jsx';
import Loader from '../Loader/Loader.jsx';
import NewsCardList from '../NewsCardList/NewsCardList.jsx';
// api
import newsApi from '../../utils/NewsApi.js';

const Main = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const articles = JSON.parse(localStorage.getItem('articles'));

  const onSearch = (keyword) => {
    setIsLoading(true);
    newsApi
      .getNews(keyword)
      .then((res) => {
        localStorage.setItem('articles', JSON.stringify(res.articles));
      })
      .catch((err) => console.error(err))
      .finally(() => setIsLoading(false));
  };

  return (
    <>
      <div className='main__background'>
        <Header
          openLoginModal={props.openLoginModal}
          toggleAuthMenu={props.toggleAuthMenu}
          isLoggedIn={props.isLoggedIn}
          onSignOut={props.onSignOut}
        />
        <Search onSearch={onSearch} />
      </div>
      {isLoading ? (
        <Loader />
      ) : (
        <NewsCardList
          articles={articles}
          isLoggedIn={props.isLoggedIn}
          saveArticle={props.saveArticle}
          deleteArticle={props.deleteArticle}
        />
      )}
    </>
  );
};

export default Main;
