import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './NewsCard.css';
//
import { getFullDate } from '../../utils/getMonthName.js';
// text constants
import { SAVE_BUTTON_TOOLTIP_TEXT, REMOVE_BUTTON_TOOLTIP_TEXT } from '../../utils/constants.js';

const NewsCard = (props) => {
  const location = useLocation();
  const currentPage = location.pathname;

  const { image, date, title, text, source, url, keyword } = props;
  const fullDate = getFullDate(date);
  // states
  const [isSaveTooltipOpen, setIsSaveTooltipOpen] = useState(false);
  const openSaveTooltip = () => setIsSaveTooltipOpen(true);
  const closeSaveTooltip = () => setIsSaveTooltipOpen(false);
  const [isRemoveTooltipOpen, setIsRemoveTooltipOpen] = useState(false);
  const openRemoveTooltip = () => setIsRemoveTooltipOpen(true);
  const closeRemoveTooltip = () => setIsRemoveTooltipOpen(false);
  // dynamic styles
  let isSaved = false;
  let articleId;
  const savedArticlesFromLocalStorage = JSON.parse(localStorage.getItem('savedArticles'));

  if (currentPage === '/' && savedArticlesFromLocalStorage && savedArticlesFromLocalStorage.length > 0) {
    savedArticlesFromLocalStorage.forEach((savedArticle) => {
      if (savedArticle.link === props.article.url) {
        isSaved = true;
        articleId = savedArticle._id;
      }
    });
  }
  const saveButtonStyle = `news-card__button news-card__button_save ${isSaved ? 'news-card__button_save-active' : ''}`;

  const saveButtonTooltipStyle = `news-card__button-tooltip news-card__button-tooltip_save ${
    props.isLoggedIn === false && isSaveTooltipOpen ? 'news-card__button-tooltip_open' : ''
  }`;
  const removeButtonTooltipStyle = `news-card__button-tooltip news-card__button-tooltip_remove ${
    isRemoveTooltipOpen ? 'news-card__button-tooltip_open' : ''
  }`;

  const saveArticleButtonCb = () => {
    !isSaved ? props.saveArticle(props.article) : props.deleteArticle(articleId);
  };

  const deleteArticleButtonCb = () => {
    props.deleteArticle(props.article._id, props.setSavedArticles);
  };

  return (
    <li className='news-card'>
      <a href={url} target='blank'>
        <img src={image} alt={title} className='news-card__image' />
      </a>
      <p className='news-card__date'>{fullDate}</p>
      <p className='news-card__title'>{title}</p>
      <p className='news-card__text'>{text}</p>
      <a href={url} className='news-card__source' target='blank'>
        {source}
      </a>
      {currentPage === '/' ? (
        <>
          <button
            className={saveButtonStyle}
            onMouseEnter={openSaveTooltip}
            onMouseLeave={closeSaveTooltip}
            onClick={saveArticleButtonCb}
          />
          <p className={saveButtonTooltipStyle}>{SAVE_BUTTON_TOOLTIP_TEXT}</p>
        </>
      ) : (
        <>
          <button
            className='news-card__button news-card__button_remove'
            onMouseEnter={openRemoveTooltip}
            onMouseLeave={closeRemoveTooltip}
            onClick={deleteArticleButtonCb}
          />
          <p className={removeButtonTooltipStyle}>{REMOVE_BUTTON_TOOLTIP_TEXT}</p>
          <p className='news-card__keyword'>{keyword}</p>
        </>
      )}
    </li>
  );
};

export default React.memo(NewsCard);
