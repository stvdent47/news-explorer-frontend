import React from 'react';
import './SavedNewsHeader.css';

import { SAVED_NEWS_PAGE_NAME, MOCK_SAVED_NEWS_HEADING } from '../../utils/constants.js';

const SavedNewsHeader = () => {
  return (
    <section className='saved-news'>
      <p className='saved-news__tip'>{SAVED_NEWS_PAGE_NAME}</p>
      <h2 className='saved-news__heading'>{MOCK_SAVED_NEWS_HEADING}</h2>
      <p className='saved-news__keywords'>
        По ключевым словам: <span className='saved-news__keywords_bold'>Природа, Тайга</span> и{' '}
        <span className='saved-news__keywords_bold'>2-м другим</span>
      </p>
    </section>
  );
};

export default SavedNewsHeader;
