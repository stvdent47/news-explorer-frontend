import React, { useState, useContext } from 'react';
import './NewsCardList.css';
// components
import NewsCard from '../NewsCard/NewsCard.jsx';
import NoSearchResults from '../NoSearchResults/NoSearchResults.jsx';
// contexts
import { CurrentPageContext } from '../../contexts/currentPageContext/currentPageContext.js';
// text constants
import { SHOW_MORE_BUTTON } from '../../utils/constants.js';

const NewsCardList = ({ articles, isLoggedIn }) => {
  const currentPage = useContext(CurrentPageContext);

  const [articleCount, setArticleCount] = useState(3);
  let articlesToRender;
  if (articles !== null) {
    articlesToRender = articles.slice(0, articleCount);
  }
  if (articles === null) return null;

  return articles.length !== 0 ? (
    <section className='news-list'>
      <h2 className='news-list__heading'>Результаты поиска</h2>
      <ul className='news-list__list'>
        {articlesToRender.map((article) => {
          return <NewsCard key={article.url} article={article} isLoggedIn={isLoggedIn} />;
        })}
      </ul>
      {currentPage.currentPageLink === '/main' && (
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
