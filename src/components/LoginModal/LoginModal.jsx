import React from 'react';
import ModalWithForm from '../ModalWithForm/ModalWithForm.jsx';

import {
  LOGIN_MODAL_TITLE,
  LOGIN_TEXT,
  MODAL_INPUT_TITLE_EMAIL,
  MODAL_INPUT_TITLE_PASSWORD,
  EMAIL_INPUT_PLACEHOLDER,
  PASSWORD_INPUT_PLACEHOLDER,
} from '../../utils/constants.js';

const LoginModal = (props) => {
  return (
    <ModalWithForm
      name='loginModal'
      title={LOGIN_MODAL_TITLE}
      isOpen={props.isOpen}
      onClose={props.onClose}
      submitButtonText={LOGIN_TEXT}
    >
      <p className='modal__input-title'>{MODAL_INPUT_TITLE_EMAIL}</p>
      <input type='text' className='modal__input' placeholder={EMAIL_INPUT_PLACEHOLDER} />
      <p className='modal__input-title'>{MODAL_INPUT_TITLE_PASSWORD}</p>
      <input type='text' className='modal__input' placeholder={PASSWORD_INPUT_PLACEHOLDER} />
    </ModalWithForm>
  );
};

export default LoginModal;
