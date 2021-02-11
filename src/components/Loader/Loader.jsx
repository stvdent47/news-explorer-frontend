import React from 'react';
import './Loader.css';

import { LOADER_TEXT } from '../../utils/constants.js';

const Loader = () => {
  return (
    <div className='loader'>
      <div className='loader__container'>
        <i className='loader__circle'></i>
        <p className='loader__text'>{LOADER_TEXT}</p>
      </div>
    </div>
  );
};

export default Loader;
