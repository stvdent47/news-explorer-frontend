import React, { useContext } from 'react';
import './NoSearchResults.css';

import NotFoundImage from '../../images/not-found-image.svg';
// contexts
import { CurrentPageContext } from '../../contexts/currentPageContext/currentPageContext.js';
// text constants
import {
  NO_SEARCH_RESULT_HEADING,
  NO_SEARCH_RESULT_TEXT_MAIN_PAGE,
  NO_SEARCH_RESULT_TEXT_SAVED_NEWS_PAGE,
} from '../../utils/constants.js';

const NoSearchResults = () => {
  const currentPage = useContext(CurrentPageContext);

  return (
    <section className='no-search-results'>
      <div className='no-search-results__container'>
        <img src={NotFoundImage} alt='картинка неудачного поиска' className='no-search-results__image' />
        <h2 className='no-search-results__heading'>{NO_SEARCH_RESULT_HEADING}</h2>
        <p className='no-search-results__text'>
          {currentPage.currentPageLink === '/main'
            ? NO_SEARCH_RESULT_TEXT_MAIN_PAGE
            : NO_SEARCH_RESULT_TEXT_SAVED_NEWS_PAGE}
        </p>
      </div>
    </section>
  );
};

export default NoSearchResults;
