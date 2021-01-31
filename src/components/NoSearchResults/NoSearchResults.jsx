import React from 'react';
import './NoSearchResults.css';

import NotFoundImage from '../../images/not-found-image.svg';
import { NO_SEARCH_RESULT_HEADING, NO_SEARCH_RESULT_TEXT } from '../../utils/constants.js';

const NoSearchResults = () => {
  return (
    <section className='no-search-results'>
      <div className="no-search-results__container">
        <img src={NotFoundImage} alt='картинка неудачного поиска' className='no-search-results__image' />
        <h2 className="no-search-results__heading">{NO_SEARCH_RESULT_HEADING}</h2>
        <p className="no-search-results__text">{NO_SEARCH_RESULT_TEXT}</p>
      </div>
    </section>
  )
}

export default NoSearchResults;
