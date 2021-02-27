import React from 'react';
import './Search.css';
// components
import SearchForm from '../SearchForm/SearchForm.jsx';
// constants
import { SEARCH_HEADING, SEARCH_SUBHEADING } from '../../utils/constants.js';

const Search = (props) => {
  return (
    <section className='search'>
      <h1 className='search__heading'>{SEARCH_HEADING}</h1>
      <p className='search__text'>{SEARCH_SUBHEADING}</p>
      <SearchForm onSearch={props.onSearch}/>
    </section>
  );
};

export default Search;
