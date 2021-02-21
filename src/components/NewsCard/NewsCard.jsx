import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './NewsCard.css';
// text constants
import { SAVE_BUTTON_TOOLTIP_TEXT, REMOVE_BUTTON_TOOLTIP_TEXT } from '../../utils/constants.js';

const NewsCard = (props) => {
  const location = useLocation();
  const currentPage = location.pathname;

  const { image, date, title, text, source, url, keyword } = props;
  const { _id: articleId } = props.article;
  // states
  const [isSaveTooltipOpen, setIsSaveTooltipOpen] = useState(false);
  const [isRemoveTooltipOpen, setIsRemoveTooltipOpen] = useState(false);
  // dynamic styles
  const saveButtonStyle = `news-card__button news-card__button_save`;
  const saveButtonTooltipStyle = `news-card__button-tooltip news-card__button-tooltip_save ${
    props.isLoggedIn === false && isSaveTooltipOpen ? 'news-card__button-tooltip_open' : ''
  }`;
  const removeButtonTooltipStyle = `news-card__button-tooltip news-card__button-tooltip_remove ${
    isRemoveTooltipOpen ? 'news-card__button-tooltip_open' : ''
  }`;

  const saveArticleCb = () => {
    props.saveArticle(props.article);
  }

  const deleteArticleCb = () => {
    props.deleteArticle(articleId, props.articles, props.setSavedArticles);
  }

  return (
    <li className='news-card'>
      <a href={url} target='blank'>
        <img src={image} alt={title} className='news-card__image' />
      </a>
      <p className='news-card__date'>{date}</p>
      <p className='news-card__title'>{title}</p>
      <p className='news-card__text'>{text}</p>
      <a href={url} className='news-card__source' target='blank'>
        {source}
      </a>
      {currentPage === '/' ? (
        <>
          <button
            className={saveButtonStyle}
            onMouseEnter={() => setIsSaveTooltipOpen(true)}
            onMouseLeave={() => setIsSaveTooltipOpen(false)}
            onClick={saveArticleCb}
          />
          <p className={saveButtonTooltipStyle}>{SAVE_BUTTON_TOOLTIP_TEXT}</p>
        </>
      ) : (
        <>
          <button
            className='news-card__button news-card__button_remove'
            onMouseEnter={() => setIsRemoveTooltipOpen(true)}
            onMouseLeave={() => setIsRemoveTooltipOpen(false)}
            onClick={deleteArticleCb}
          />
          <p className={removeButtonTooltipStyle}>{REMOVE_BUTTON_TOOLTIP_TEXT}</p>
          <p className='news-card__keyword'>{keyword}</p>
        </>
      )}
    </li>
  );
};

export default React.memo(NewsCard);
