import React from 'react';
import './SubmitButton.css';

const SubmitButton = (props) => {
  return <button type='submit' className='submit-button submit-button_search'>{props.buttonText}</button>
};

export default SubmitButton;