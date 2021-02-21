import React, { useContext } from 'react';
import './SavedNewsHeader.css';
// contexts
import { CurrentUserContext } from '../../contexts/currentUserContext/currentUserContext.js';
// text constants
import { SAVED_NEWS_PAGE_NAME } from '../../utils/constants.js';
//
import { getEndingsForSavedArticles, getMostUsedKeywords } from '../../utils/savedNewsFns.js';

const SavedNewsHeader = (props) => {
  const currentUser = useContext(CurrentUserContext);
  const savedNewsHeading = `${currentUser.name}, у вас ${props.articles.length} ${getEndingsForSavedArticles(
    props.articles.length
  )}`;

  return (
    <section className='saved-news'>
      <p className='saved-news__tip'>{SAVED_NEWS_PAGE_NAME}</p>
      <h2 className='saved-news__heading'>{savedNewsHeading}</h2>
      {props.articles.length ? (
        <p className='saved-news__keywords'>
          По ключевым словам: {getMostUsedKeywords(props.articles, 'saved-news__keywords_bold')}
        </p>
      ) : null}
    </section>
  );
};

export default SavedNewsHeader;
