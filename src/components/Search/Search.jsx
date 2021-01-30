import React from 'react';
import './Search.css';
import SearchForm from '../SearchInput/SearchForm.jsx';

const Search = () => {
  return (
    <section className='search'>
      <h1 className="search__heading">Что творится в мире?</h1>
      <p className="search__text">Находите самые свежие статьи на любую тему и сохраняйте в своём личном кабинете.</p>
      <SearchForm />
      
    </section>
  )
};

export default Search;
