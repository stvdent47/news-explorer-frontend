import React from 'react';
// components
import ModalWithForm from '../ModalWithForm/ModalWithForm.jsx';
// text constants
import {
  LOGIN_MODAL_TITLE,
  LOGIN_TEXT,
  MODAL_INPUT_TITLE_EMAIL,
  MODAL_INPUT_TITLE_PASSWORD,
  EMAIL_INPUT_PLACEHOLDER,
  PASSWORD_INPUT_PLACEHOLDER,
  MOCK_WRONG_EMAIL_INPUT,
} from '../../utils/constants.js';

const LoginModal = (props) => {
  return (
    <ModalWithForm
      name='loginModal'
      title={LOGIN_MODAL_TITLE}
      isOpen={props.isOpen}
      onClose={props.onClose}
      submitButtonText={LOGIN_TEXT}
      switchToSigupModal={props.switchToSigupModal}
    >
      <label htmlFor='emailInput' className='modal__input-title'>
        {MODAL_INPUT_TITLE_EMAIL}
        <input
          type='text'
          name='emailInput'
          id='emailInput'
          className='modal__input'
          placeholder={EMAIL_INPUT_PLACEHOLDER}
        />
      </label>
      <p className='modal__input-error' id='emailInputError'>{MOCK_WRONG_EMAIL_INPUT}</p>
      <label htmlFor='' className='modal__input-title'>
        {MODAL_INPUT_TITLE_PASSWORD}
        <input
          type='text'
          name='passwordInput'
          id='passwordInput'
          className='modal__input'
          placeholder={PASSWORD_INPUT_PLACEHOLDER}
        />
      </label>
      <p className='modal__input-error' id='passwordInputError'>{MOCK_WRONG_EMAIL_INPUT}</p>
    </ModalWithForm>
  );
};

export default LoginModal;
