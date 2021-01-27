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

        <ul className='footer__nav-list'>

          <li className='footer__list-item'>
            <Link to='/' className='footer__text-link'>Главная</Link>
          </li>

          <li className='footer__list-item'>
            <a href='https://praktikum.yandex.ru/' target='blank' className='footer__text-link'>
              Яндекс.Практикум
            </a>
          </li>

          <li className='footer__list-item'>
            <a href='https://github.com/stvdent47' target='blank' className='footer__icon-link' >
              <img src={githubLogo} alt='Ссылка на Github' className='footer__icon-image' />
            </a>
          </li>

          <li className='footer__list-item'>
            <a href='https://www.facebook.com/stvdent47' target='blank' className='footer__icon-link' >
              <img src={facebookLogo} alt='Ссылка на Facebook' className='footer__icon-image' />
            </a>
          </li>

        </ul>

      </nav>
    </footer>
  );
};

export default Footer;
