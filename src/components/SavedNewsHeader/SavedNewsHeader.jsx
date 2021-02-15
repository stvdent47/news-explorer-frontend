import React, { useContext } from 'react';
import './SavedNewsHeader.css';
// contexts
import { CurrentUserContext } from '../../contexts/currentUserContext/currentUserContext.js';
// text constants
import { SAVED_NEWS_PAGE_NAME } from '../../utils/constants.js';

const SavedNewsHeader = () => {
  const currentUser = useContext(CurrentUserContext);
  const number = 5;
  const savedNewsHeading = `${currentUser.name}, у вас ${number} сохранённых статей`

  return (
    <section className='saved-news'>
      <p className='saved-news__tip'>{SAVED_NEWS_PAGE_NAME}</p>
      <h2 className='saved-news__heading'>{savedNewsHeading}</h2>
      <p className='saved-news__keywords'>
        По ключевым словам: <span className='saved-news__keywords_bold'>Природа, Тайга</span> и{' '}
        <span className='saved-news__keywords_bold'>2-м другим</span>
      </p>
    </section>
  );
};

export default SavedNewsHeader;
