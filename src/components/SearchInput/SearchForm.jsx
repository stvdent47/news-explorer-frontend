import React from 'react'
import './SearchForm.css';
import SubmitButton from '../SubmitButton/SubmitButton.jsx';
import { SEARCH_BUTTON_TEXT, SEARCH_INPUT_PLACEHOLDER } from '../../utils/constants.js';

const SearchForm = () => {
  return (
    <form className='search-form'>
      <input type="text" placeholder={SEARCH_INPUT_PLACEHOLDER} className='search-form__input' />
      <SubmitButton buttonText={SEARCH_BUTTON_TEXT} />
    </form>
  )
};

export default SearchForm;