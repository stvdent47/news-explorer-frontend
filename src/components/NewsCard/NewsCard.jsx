import React from 'react';
import './NewsCard.css';

const NewsCard = (props) => {
  // 'saved' is just for mock displaying
  const { image, date, title, text, source, link, saved } = props.card;

  return (
    <li className='news-list__item'>
      <a href={link} target='blank'>
        <img src={image} alt={title} className='news-list__image' />
      </a>
      <p className='news-list__date'>{date}</p>
      <p className='news-list__title'>{title}</p>
      <p className='news-list__text'>{text}</p>
      <a href={link} className='news-list__source'>
        {source}
      </a>
      <button className={`news-list__save-button ${saved === '1' && 'news-list__save-button_active'}`} />
    </li>
  );
};

export default NewsCard;
