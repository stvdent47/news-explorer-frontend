import React, { useState, useContext } from 'react';
import './Main.css';
// components
import Header from '../Header/Header.jsx';
import Search from '../Search/Search.jsx';
import Loader from '../Loader/Loader.jsx';
import NewsCardList from '../NewsCardList/NewsCardList.jsx';

//
import newsApi from '../../utils/NewsApi.js';
// contexts
import { CurrentPageContext } from '../../contexts/currentPageContext/currentPageContext.js';
// mock data for news card displaying
import newsCards from '../../mockData/cards.json';

const Main = (props) => {
  const currentPage = useContext(CurrentPageContext);
  currentPage.currentPageLink = '/main';

  const [isLoading, setIsLoading] = useState(false);
  // const [articles, setArticles] = useState(null);
  const articles = JSON.parse(localStorage.getItem('articles'))


  const onSearch = (keyword) => {
    setIsLoading(true);
    newsApi
      .getNews(keyword)
      .then((res) => {
        // setIsLoading(false);
        localStorage.setItem('articles', JSON.stringify(res.articles))
        // setArticles(res.articles);
        // setArticles(JSON.parse(localStorage.getItem('articles')))
        console.log(articles)
        // console.log(JSON.parse(localStorage.getItem('articles')));
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
          handleSignOut={props.handleSignOut}
        />
        <Search onSearch={onSearch}/>
      </div>
      {isLoading ? (
        <Loader />
      ) : (<NewsCardList articles={articles} isLoggedIn={props.isLoggedIn} />)}
    </>
  );
};

export default Main;
