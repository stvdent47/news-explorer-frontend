import React from 'react';
import './SearchForm.css';
// text constants
import { SEARCH_BUTTON_TEXT, SEARCH_INPUT_PLACEHOLDER } from '../../utils/constants.js';

const SearchForm = () => {
  return (
    <form className='search-form'>
      <input type='text' placeholder={SEARCH_INPUT_PLACEHOLDER} className='search-form__input' />
      <button type='submit' className='search-form__submit-button'>
        {SEARCH_BUTTON_TEXT}
      </button>
    </form>
  );
};

export default SearchForm;
