import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import { FOOTER_COPYRIGHT_TEXT } from '../../utils/constants.js';

const Footer = () => {
  return (
    <footer className='footer'>
      <p className='footer__copyright'>&copy; {FOOTER_COPYRIGHT_TEXT}</p>

      <nav className='footer__nav'>
        <ul className='footer__nav-list'>
          <li className='footer__list-item'>
            <Link to='/' className='footer__text-link'>
              Главная
            </Link>
          </li>

          <li className='footer__list-item'>
            <a href='https://praktikum.yandex.ru/' target='blank' className='footer__text-link'>
              Яндекс.Практикум
            </a>
          </li>

          <li className='footer__list-item'>
            <a href='https://github.com/stvdent47' target='blank' className='footer__icon-link'>
              <div className='footer__icon-image footer__icon-image_git' />
            </a>
          </li>

          <li className='footer__list-item'>
            <a href='https://www.facebook.com/stvdent47' target='blank' className='footer__icon-link'>
              <div className='footer__icon-image footer__icon-image_fb' />
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
