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
} from '../../utils/constants.js';

const LoginModal = (props) => {
  const { values, errors, isFormValid, handleChange, resetForm } = useFormWithValidation();

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
    >
      <label htmlFor='emailInputLogin' className='modal__input-title'>
        {MODAL_INPUT_TITLE_EMAIL}
        <input
          type='emai'
          required
          name='emailInputLogin'
          id='emailInputLogin'
          onChange={handleChange}
          value={values.emailInputLogin || ''}
          className='modal__input'
          placeholder={EMAIL_INPUT_PLACEHOLDER}
        />
      </label>
      <p
        className={`modal__input-error ${errors.emailInputLogin ? 'modal__input-error_visible' : ''}`}
        id='emailInputLoginError'
      >
        {errors.emailInputLogin || 'no error'}
      </p>
      <label htmlFor='passwordInputLogin' className='modal__input-title'>
        {MODAL_INPUT_TITLE_PASSWORD}
        <input
          type='password'
          required
          name='passwordInputLogin'
          id='passwordInputLogin'
          onChange={handleChange}
          value={values.passwordInputLogin || ''}
          className='modal__input'
          placeholder={PASSWORD_INPUT_PLACEHOLDER}
        />
      </label>
      <p
        className={`modal__input-error ${errors.passwordInputLogin ? 'modal__input-error_visible' : ''}`}
        id='passwordInputLoginError'
      >
        {errors.passwordInputLogin || 'no error'}
      </p>
    </ModalWithForm>
  );
};

export default LoginModal;
