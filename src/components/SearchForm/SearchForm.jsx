import React from 'react';
import './SearchForm.css';
// hooks
import useFormWithValidation from '../../hooks/useFormWithValidation.jsx';
// text constants
import { SEARCH_BUTTON_TEXT, SEARCH_INPUT_PLACEHOLDER, SEARCH_ERROR_TEXT } from '../../utils/constants.js';

const SearchForm = (props) => {
  const { values, errors, isFormValid, handleChange } = useFormWithValidation();

  const searchFormErrorStyle = `search-form__error ${errors.searchInput ? 'search-form__error_visible' : ''}`;

  const onSubmit = (evt) => {
    evt.preventDefault();

    if (isFormValid) {
      localStorage.setItem('keyword', values.searchInput);
      props.onSearch(values.searchInput);
    }
  };

  return (
    <form className='search-form' onSubmit={onSubmit} autoComplete='off' noValidate>
      <p className={searchFormErrorStyle}>{SEARCH_ERROR_TEXT}</p>
      <input
        type='text'
        required
        name='searchInput'
        placeholder={SEARCH_INPUT_PLACEHOLDER}
        className='search-form__input'
        onChange={handleChange}
        value={values.searchInput || ''}
      />
      <button type='submit' className='search-form__submit-button'>
        {SEARCH_BUTTON_TEXT}
      </button>
    </form>
  );
};

export default SearchForm;
