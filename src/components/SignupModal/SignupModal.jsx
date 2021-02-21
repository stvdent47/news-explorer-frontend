import React, { useEffect } from 'react';
// hooks
import useFormWithValidation from '../../hooks/useFormWithValidation.jsx';
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
  UNIQUE_USER_ERROR,
} from '../../utils/constants.js';

const SignupModal = (props) => {
  const { values, errors, isFormValid, handleChange, resetForm } = useFormWithValidation();

  const onSubmit = () => {
    const { email, password, name } = values;

    props.onRegister(email, password, name);
  };

  useEffect(() => {
    resetForm();
  }, [props.isOpen, resetForm]);

  return (
    <ModalWithForm
      name='signupModal'
      title={SIGNUP_MODAL_TITLE}
      isOpen={props.isOpen}
      onClose={props.onClose}
      submitButtonText={SIGNUP_TEXT}
      switchToLoginModal={props.switchToLoginModal}
      isSubmitDisabled={!isFormValid}
      onSubmit={onSubmit}
    >
      <label htmlFor='email' className='modal__input-title'>
        {MODAL_INPUT_TITLE_EMAIL}
        <input
          type='email'
          required
          name='email'
          id='emailInputSignup'
          onChange={handleChange}
          value={values.email || ''}
          className='modal__input'
          placeholder={EMAIL_INPUT_PLACEHOLDER}
        />
      </label>
      <p
        className={`modal__input-error ${errors.email ? 'modal__input-error_visible' : ''}`}
        id='emailInputSignupError'
      >
        {errors.email || 'no error'}
      </p>
      <label htmlFor='password' className='modal__input-title'>
        {MODAL_INPUT_TITLE_PASSWORD}
        <input
          type='password'
          required
          minLength='8'
          name='password'
          id='passwordInputSignup'
          onChange={handleChange}
          value={values.password || ''}
          className='modal__input'
          placeholder={PASSWORD_INPUT_PLACEHOLDER}
        />
      </label>
      <p
        className={`modal__input-error ${errors.password ? 'modal__input-error_visible' : ''}`}
        id='passwordInputSignupError'
      >
        {errors.password || 'no error'}
      </p>
      <label htmlFor='name' className='modal__input-title'>
        {MODAL_INPUT_TITLE_NAME}
        <input
          type='text'
          required
          minLength='2'
          maxLength='30'
          name='name'
          id='nameInputSignup'
          onChange={handleChange}
          value={values.name || ''}
          className='modal__input'
          placeholder={NAME_INPUT_PLACEHOLDER}
        />
      </label>
      <p className={`modal__input-error ${errors.name ? 'modal__input-error_visible' : ''}`} id='nameInputSignupError'>
        {errors.name || 'no error'}
      </p>
      <p className={`modal__submit-error ${props.signupError ? 'modal__submit-error_visible' : ''}`}>
        {UNIQUE_USER_ERROR}
      </p>
    </ModalWithForm>
  );
};

export default SignupModal;
