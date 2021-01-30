import React from 'react'
import './NewsCardList.css';

import NewsCard from '../NewsCard/NewsCard.jsx';

const NewsCardList = (props) => {
  return (
    <section className='news-list'>
      <h2 className="news-list__heading">Результаты поиска</h2>
      <ul>
      {props.newsCards.map((card) => {
        return (
          <NewsCard card={card} />
        );
      })}

      </ul>
    </section>
  )
}

export default NewsCardList;
