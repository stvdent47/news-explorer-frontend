import React from 'react';
import './NewsCard.css';

const NewsCard = (props) => {
  return (
    <li>
      <img src={props.card.image} alt=""/>
      <p>{props.card.date}</p>
      <p>{props.card.title}</p>
      <p>{props.card.text}</p>
      <p>{props.card.source}</p>
      <a href={props.card.link} target='blank'>link</a>
    </li>
  )

}

export default NewsCard;