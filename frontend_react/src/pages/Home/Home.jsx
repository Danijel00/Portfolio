import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.scss';
import AnimatedLetters from '../../components/Animations/AnimatedLetters';
import image from '../../constants/images';

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-bounce');

  const nameText = 'anijel'.split('');
  const welcomeText = 'Welcome'.split('');

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-bounce-hover');
    }, 4000);
  }, []);

  return (
    <header className="header">
      <div className="header__content container content">
        <div className="header__text">
          <div className="header__text-content">
            <h1 className="header__text-heading heading">
              <span className={`${letterClass} _11`}>H</span>
              <span className={`${letterClass} _12`}>i,</span>
              <br />
              <span className={`${letterClass} _13`}>I'</span>
              <span className={`${letterClass} _14`}>m</span>
              <img
                className="header__text-img"
                src={image.logo}
                alt="logo-letter"
              />
              <AnimatedLetters
                letterClass={letterClass}
                strArray={nameText}
                idx={15}
              />
            </h1>
            <h2 className="header__text-subheading">Frontend Developer</h2>
            <div className="header__buttons">
              <Link to="/contact" className="button">
                Contact me
              </Link>
              <Link to="/portfolio" className="button">
                See my work
              </Link>
            </div>
          </div>
        </div>
      </div>
      <span className="header__welcome">
        <AnimatedLetters
          letterClass={letterClass}
          strArray={welcomeText}
          idx={10}
        />
      </span>
      <div className="header__banner">
        <div>&nbsp;</div>
      </div>
    </header>
  );
};

export default Home;
