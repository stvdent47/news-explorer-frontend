import React from 'react';
import './InfoTooltip.css';
//
import { INFOTOOLTIP_TEXT, LOGIN_TEXT } from '../../utils/constants.js';

const InfoTooltip = (props) => {
  return (
    <div className={`infotooltip infoTooltip ${props.isOpen ? 'infotooltip_opened' : ''}`}>
      <div className='infotooltip__container'>
        <h2 className='infotooltip__title'>{INFOTOOLTIP_TEXT}</h2>
        <p className='infotooltip__link' onClick={props.switchToLoginModal}>
          {LOGIN_TEXT}
        </p>
        <button className='infotooltip__close-button' onClick={props.onClose} />
      </div>
    </div>
  );
};

export default InfoTooltip;
