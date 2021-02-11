import React from 'react';
// components
import ModalWithForm from '../ModalWithForm/ModalWithForm.jsx';
// text constants
import {
  SIGNUP_MODAL_TITLE,
  SIGNUP_TEXT,
  MODAL_INPUT_TITLE_EMAIL,
  EMAIL_INPUT_PLACEHOLDER,
  MODAL_INPUT_TITLE_PASSWORD,
  PASSWORD_INPUT_PLACEHOLDER,
  MODAL_INPUT_TITLE_NAME,
  NAME_INPUT_PLACEHOLDER,
  MOCK_WRONG_EMAIL_INPUT,
  MOCK_UNIQUE_USER_ERROR,
} from '../../utils/constants.js';

const SignupModal = (props) => {
  return (
    <ModalWithForm
      name='signupModal'
      title={SIGNUP_MODAL_TITLE}
      isOpen={props.isOpen}
      onClose={props.onClose}
      submitButtonText={SIGNUP_TEXT}
      switchToLoginModal={props.switchToLoginModal}
    >
      <label htmlFor='' className='modal__input-title'>
        {MODAL_INPUT_TITLE_EMAIL}
        <input
          type='text'
          name='emailInput'
          id='emailInput'
          className='modal__input'
          placeholder={EMAIL_INPUT_PLACEHOLDER}
        />
      </label>
      <p className='modal__input-error'>{MOCK_WRONG_EMAIL_INPUT}</p>
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
      <p className='modal__input-error'>{MOCK_WRONG_EMAIL_INPUT}</p>
      <label htmlFor='' className='modal__input-title'>
        {MODAL_INPUT_TITLE_NAME}
        <input
          type='text'
          name='passwordInput'
          id='passwordInput'
          className='modal__input'
          placeholder={NAME_INPUT_PLACEHOLDER}
        />
      </label>
      <p className='modal__input-error'>{MOCK_WRONG_EMAIL_INPUT}</p>
      <p className='modal__submit-error'>{MOCK_UNIQUE_USER_ERROR}</p>
    </ModalWithForm>
  );
};

export default SignupModal;
