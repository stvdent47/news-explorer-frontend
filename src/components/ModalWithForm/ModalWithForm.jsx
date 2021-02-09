import React from 'react';
import './ModalWithForm.css';

import { LOGIN_TEXT, SIGNUP_TEXT } from '../../utils/constants.js';

const ModalWithForm = (props) => {
  const modalCaption =
    props.name === 'loginModal' ? (
      <p className='modal__caption'>
        или{' '}
        <span className='modal__caption-span' onClick={props.switchToSigupModal}>
          {SIGNUP_TEXT}
        </span>
      </p>
    ) : (
      <p className='modal__caption'>
        или{' '}
        <span className='modal__caption-span' onClick={props.switchToLoginModal}>
          {LOGIN_TEXT}
        </span>
      </p>
    );

  return (
    <div className={`modal ${props.name} ${props.isOpen ? 'modal_opened' : null}`}>
      <div className='modal__container'>
        <h2 className='modal__title'>{props.title}</h2>
        <form action='#'>
          {props.children}
          <button className='modal__submit-button'>{props.submitButtonText}</button>
        </form>
        <button className='modal__close-button' onClick={props.onClose} />
        {modalCaption}
      </div>
    </div>
  );
};

export default ModalWithForm;
