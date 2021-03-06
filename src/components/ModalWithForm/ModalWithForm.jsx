import React from 'react';
import './ModalWithForm.css';
// text constants
import { LOGIN_TEXT, SIGNUP_TEXT } from '../../utils/constants.js';

const ModalWithForm = ({
  name,
  title,
  isOpen,
  isSubmitDisabled = false,
  onClose,
  onSubmit,
  switchToSigupModal,
  switchToLoginModal,
  submitButtonText,
  children,
  isSubmitting = false,
}) => {
  const modalCaption =
    name === 'loginModal' ? (
      <p className='modal__caption'>
        или{' '}
        <span className='modal__caption-span' onClick={switchToSigupModal}>
          {SIGNUP_TEXT}
        </span>
      </p>
    ) : (
      <p className='modal__caption'>
        или{' '}
        <span className='modal__caption-span' onClick={switchToLoginModal}>
          {LOGIN_TEXT}
        </span>
      </p>
    );

  const handleSubmit = (evt) => {
    evt.preventDefault();

    onSubmit();
  };

  return (
    <div className={`modal ${name} ${isOpen ? 'modal_opened' : ''}`}>
      <div className='modal__container'>
        <h2 className='modal__title'>{title}</h2>
        <form action='#' noValidate onSubmit={handleSubmit}>
          {children}
          <button
            type='submit'
            className={`modal__submit-button ${
              isSubmitDisabled && isSubmitting ? 'modal__submit-button_disabled' : ''
            }`}
            disabled={isSubmitDisabled}
          >
            {submitButtonText}
          </button>
        </form>
        <button className='modal__close-button' onClick={onClose} />
        {modalCaption}
      </div>
    </div>
  );
};

export default ModalWithForm;
