import React from 'react';
import './NoSearchResults.css';

import NotFoundImage from '../../images/not-found-image.svg';
// text constants
import {
  NO_SEARCH_RESULT_HEADING,
  NO_SEARCH_RESULT_TEXT_MAIN_PAGE,
  NO_SEARCH_RESULT_TEXT_SAVED_NEWS_PAGE,
} from '../../utils/constants.js';

const NoSearchResults = (props) => {
  return (
    <section className='no-search-results'>
      <div className='no-search-results__container'>
        <img src={NotFoundImage} alt='картинка неудачного поиска' className='no-search-results__image' />
        <h2 className='no-search-results__heading'>{NO_SEARCH_RESULT_HEADING}</h2>
        <p className='no-search-results__text'>
          {props.componentPage === 'main' ? NO_SEARCH_RESULT_TEXT_MAIN_PAGE : NO_SEARCH_RESULT_TEXT_SAVED_NEWS_PAGE}
        </p>
      </div>
    </section>
  );
};

export default NoSearchResults;
