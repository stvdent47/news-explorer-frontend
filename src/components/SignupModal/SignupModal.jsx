import React, { useState } from 'react';
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
  const [inputValues, setInputValues] = useState({});

  const handleInputChange = (evt) => {
    const inputName = evt.target.name;
    const inputValue = evt.target.value;

    setInputValues({
      ...inputValues,
      [inputName]: inputValue,
    });
  };

  return (
    <ModalWithForm
      name='signupModal'
      title={SIGNUP_MODAL_TITLE}
      isOpen={props.isOpen}
      onClose={props.onClose}
      submitButtonText={SIGNUP_TEXT}
      switchToLoginModal={props.switchToLoginModal}
    >
      <label htmlFor='emailInputSignup' className='modal__input-title'>
        {MODAL_INPUT_TITLE_EMAIL}
        <input
          type='email'
          required
          name='emailInputSignup'
          id='emailInputSignup'
          onChange={handleInputChange}
          value={inputValues.emailInputSignup}
          className='modal__input'
          placeholder={EMAIL_INPUT_PLACEHOLDER}
        />
      </label>
      <p className='modal__input-error' id='emailInputSignupError'>
        {MOCK_WRONG_EMAIL_INPUT}
      </p>
      <label htmlFor='passwordInputSignup' className='modal__input-title'>
        {MODAL_INPUT_TITLE_PASSWORD}
        <input
          type='password'
          required
          name='passwordInputSignup'
          id='passwordInputSignup'
          onChange={handleInputChange}
          value={inputValues.passwordInputSignup}
          className='modal__input'
          placeholder={PASSWORD_INPUT_PLACEHOLDER}
        />
      </label>
      <p className='modal__input-error' id='passwordInputSignupError'>
        {MOCK_WRONG_EMAIL_INPUT}
      </p>
      <label htmlFor='nameInputSignup' className='modal__input-title'>
        {MODAL_INPUT_TITLE_NAME}
        <input
          type='text'
          required
          name='nameInputSignup'
          id='nameInputSignup'
          onChange={handleInputChange}
          value={inputValues.nameInputSignup}
          className='modal__input'
          placeholder={NAME_INPUT_PLACEHOLDER}
        />
      </label>
      <p className='modal__input-error' id='nameInputSignupError'>
        {MOCK_WRONG_EMAIL_INPUT}
      </p>
      <p className='modal__submit-error'>{MOCK_UNIQUE_USER_ERROR}</p>
    </ModalWithForm>
  );
};

export default SignupModal;
