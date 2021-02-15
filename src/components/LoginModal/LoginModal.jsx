import React, { useEffect } from 'react';
// hooks
import useFormWithValidation from '../../hooks/useFormWithValidation.jsx';
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
  WRONG_CREDENTIALS_ERROR,
} from '../../utils/constants.js';

const LoginModal = (props) => {
  const { values, errors, isFormValid, handleChange, resetForm } = useFormWithValidation();

  const onSubmit = () => {
    const { email, password } = values;

    props.onLogin(email, password);
  };

  useEffect(() => {
    resetForm();
  }, [props.isOpen, resetForm]);

  return (
    <ModalWithForm
      name='loginModal'
      title={LOGIN_MODAL_TITLE}
      isOpen={props.isOpen}
      onClose={props.onClose}
      submitButtonText={LOGIN_TEXT}
      switchToSigupModal={props.switchToSigupModal}
      isSubmitDisabled={!isFormValid}
      onSubmit={onSubmit}
    >
      <label htmlFor='email' className='modal__input-title'>
        {MODAL_INPUT_TITLE_EMAIL}
        <input
          type='email'
          required
          name='email'
          id='emailInputLogin'
          onChange={handleChange}
          value={values.email || ''}
          className='modal__input'
          placeholder={EMAIL_INPUT_PLACEHOLDER}
        />
      </label>
      <p className={`modal__input-error ${errors.email ? 'modal__input-error_visible' : ''}`} id='emailError'>
        {errors.email || 'no error'}
      </p>
      <label htmlFor='password' className='modal__input-title'>
        {MODAL_INPUT_TITLE_PASSWORD}
        <input
          type='password'
          required
          minLength='8'
          name='password'
          id='passwordInputLogin'
          onChange={handleChange}
          value={values.password || ''}
          className='modal__input'
          placeholder={PASSWORD_INPUT_PLACEHOLDER}
        />
      </label>
      <p className={`modal__input-error ${errors.password ? 'modal__input-error_visible' : ''}`} id='passwordError'>
        {errors.password || 'no error'}
      </p>
      <p className={`modal__submit-error ${props.loginError ? 'modal__submit-error_visible' : ''}`}>
        {WRONG_CREDENTIALS_ERROR}
      </p>
    </ModalWithForm>
  );
};

export default LoginModal;
