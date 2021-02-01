import React from 'react';
import './About.css';
// about image
import aboutPhoto from '../../images/about-photo.jpg';

const About = () => {
  return (
    <section className='about'>
      <img src={aboutPhoto} alt='фото автора' className='about__photo' />

      <div className='about__text-container'>
        <h2 className='about__heading'>Об авторе</h2>
        <p className='about__text'>Это блок с описанием автора проекта. Здесь следует указать, как вас зовут, чем вы занимаетесь, какими технологиями разработки владеете.</p>
        <p className='about__text'>Также можно рассказать о процессе обучения в Практикуме, чему вы тут научились, и чем можете помочь потенциальным заказчикам.</p>
      </div>
    </section>
  );
};

export default About;
