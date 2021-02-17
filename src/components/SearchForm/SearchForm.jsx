import React from 'react';
import './SearchForm.css';
//
import useForm from '../../hooks/useForm.jsx';
// text constants
import { SEARCH_BUTTON_TEXT, SEARCH_INPUT_PLACEHOLDER, SEARCH_ERROR_TEXT } from '../../utils/constants.js';

const SearchForm = (props) => {
  const { values, setValues, handleChange } = useForm();

  const mockErrorState = false;
  const searchFormErrorStyle = `search-form__error ${mockErrorState ? 'search-form__error' : ''}`;

  const onSubmit = (evt) => {
    evt.preventDefault();

    console.log('input', values.searchInput);
    props.onSearch(values.searchInput);
  };

  return (
    <form className='search-form' onSubmit={onSubmit} autoComplete='off'>
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
