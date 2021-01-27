import React from 'react';
import './SubmitButton.css';

const SubmitButton = (props) => {
  return <button type='submit'>{props.buttonText}</button>
};

export default SubmitButton;