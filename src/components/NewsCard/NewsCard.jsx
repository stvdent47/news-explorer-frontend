import React, { useState, useContext } from 'react';
import './NewsCard.css';
// contexts
import { CurrentPageContext } from '../../contexts/currentPageContext/currentPageContext.js';
// text constants
import { SAVE_BUTTON_TOOLTIP_TEXT, REMOVE_BUTTON_TOOLTIP_TEXT } from '../../utils/constants.js';

const NewsCard = (props) => {
  const currentPage = useContext(CurrentPageContext);

  const { urlToImage, publishedAt, title, description, source, url } = props.article; // 'saved' is just for mock displaying
  // states
  const [isSaveTooltipOpen, setIsSaveTooltipOpen] = useState(false);
  const [isRemoveTooltipOpen, setIsRemoveTooltipOpen] = useState(false);
  // dynamic styles
  // const saveButtonStyle = `news-card__button news-card__button_save ${
  //   saved === '1' && 'news-card__button_save-active'
  // }`;
  const saveButtonTooltipStyle = `news-card__button-tooltip news-card__button-tooltip_save ${
    props.isLoggedIn === false && isSaveTooltipOpen ? 'news-card__button-tooltip_open' : ''
  }`;
  const removeButtonTooltipStyle = `news-card__button-tooltip news-card__button-tooltip_remove ${
    isRemoveTooltipOpen ? 'news-card__button-tooltip_open' : ''
  }`;

  return (
    <li className='news-card'>
      <a href={url} target='blank'>
        <img src={urlToImage} alt={title} className='news-card__image' />
      </a>
      <p className='news-card__date'>{publishedAt}</p>
      <p className='news-card__title'>{title}</p>
      <p className='news-card__text'>{description}</p>
      <a href={url} className='news-card__source' target='blank'>
        {source.name}
      </a>
      {currentPage.currentPageLink === '/main' ? (
        <>
          <button
            className='news-card__button'
            onMouseEnter={() => setIsSaveTooltipOpen(true)}
            onMouseLeave={() => setIsSaveTooltipOpen(false)}
          />
          <p className={saveButtonTooltipStyle}>{SAVE_BUTTON_TOOLTIP_TEXT}</p>
        </>
      ) : (
        <>
          <button
            className='news-card__button news-card__button_remove'
            onMouseEnter={() => setIsRemoveTooltipOpen(true)}
            onMouseLeave={() => setIsRemoveTooltipOpen(false)}
          />
          <p className={removeButtonTooltipStyle}>{REMOVE_BUTTON_TOOLTIP_TEXT}</p>
          <p className='news-card__keyword'>keyword</p>
        </>
      )}
    </li>
  );
};

export default NewsCard;
