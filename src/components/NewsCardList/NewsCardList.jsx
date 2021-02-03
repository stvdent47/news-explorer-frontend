import React from 'react'
import './NewsCardList.css';
// components
import NewsCard from '../NewsCard/NewsCard.jsx';
// text constants
import { SHOW_MORE_BUTTON } from '../../utils/constants.js';

const NewsCardList = (props) => {
  return (
    <section className='news-list'>
      

      <h2 className="news-list__heading">Результаты поиска</h2>
      <ul className='news-list__list'>
        {props.newsCards.map((card) => {
          return (
            <NewsCard key={card._id} card={card} />
          );
        })}
      </ul>
      <button className="news-list__show-more-button">{SHOW_MORE_BUTTON}</button>

      
    </section>
  )
}

export default NewsCardList;
