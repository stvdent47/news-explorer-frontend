import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import githubLogo from '../../images/github.svg';
import facebookLogo from '../../images/facebook.svg';

const Footer = () => {
  return (
    <footer className='footer'>
      <p className='footer__copyright'>&copy; 2020 Supersite, Powered by News API</p>
      <nav className='footer__nav'>
        <ul className='footer__link-items'>
          <li className='footer__link-item'>
            <Link to='/' className='footer__link'>Главная</Link>
          </li>
          <li>
            <a href='https://praktikum.yandex.ru/' target='blank' className='footer__link'>
              Яндекс.Практикум
            </a>
          </li>
          <li>
            <a href='https://github.com/stvdent47' target='blank'>
              <img src={githubLogo} alt='Ссылка на Github' />
            </a>
          </li>
          <li>
            <a href='https://www.facebook.com/stvdent47' target='blank'>
              <img src={facebookLogo} alt='Ссылка на Facebook' />
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
