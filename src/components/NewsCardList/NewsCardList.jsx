import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './NewsCardList.css';
// components
import NewsCard from '../NewsCard/NewsCard.jsx';
import NoSearchResults from '../NoSearchResults/NoSearchResults.jsx';
// text constants
import { SHOW_MORE_BUTTON } from '../../utils/constants.js';

const NewsCardList = ({ articles, isLoggedIn, saveArticle, deleteArticle, setSavedArticles }) => {
  const location = useLocation();
  const currentPage = location.pathname;

  const [articleCount, setArticleCount] = useState(3);
  let articlesToRender;
  if (articles !== null && currentPage === '/') {
    articlesToRender = articles.slice(0, articleCount);
  } else {
    articlesToRender = articles;
  }
  if (articles === null) return null;

  return articles.length !== 0 ? (
    <section className='news-list'>
      <h2 className='news-list__heading'>Результаты поиска</h2>
      <ul className='news-list__list'>
        {articlesToRender.map((article) => {
          if (currentPage === '/') {
            return (
              <NewsCard
                key={article.url}
                article={article}
                image={article.urlToImage}
                date={article.publishedAt}
                title={article.title}
                text={article.description}
                source={article.source.name}
                url={article.url}
                isLoggedIn={isLoggedIn}
                saveArticle={saveArticle}
              />
            );
          } else {
            return (
              <NewsCard
                key={article._id}
                article={article}
                image={article.image}
                date={article.date}
                title={article.title}
                text={article.text}
                source={article.source}
                url={article.url}
                keyword={article.keyword}
                isLoggedIn={isLoggedIn}
                deleteArticle={deleteArticle}
                articles={articles}
                setSavedArticles={setSavedArticles}
              />
            );
          }
        })}
      </ul>
      {currentPage === '/' && (
        <button className='news-list__show-more-button' onClick={() => setArticleCount(articleCount + 3)}>
          {SHOW_MORE_BUTTON}
        </button>
      )}
    </section>
  ) : (
    <NoSearchResults />
  );
};

export default NewsCardList;
