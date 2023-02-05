import React, { useEffect, useState } from 'react';
import AnimatedLetters from '../../components/Animations/AnimatedLetters';
import './About.scss';
import '../../styles/global/_fonts.scss';
// import pdf from '../../constants/images';
import { urlFor, client } from '../../client';
import icon from '../../constants/images';

const About = () => {
  const [abouts, setAbouts] = useState([]);
  const [skills, setSkills] = useState([]);
  const [letterClass, setLetterClass] = useState('text-bounce');
  let heading = 'About me'.split('');

  // FETCH DATA FROM SANITY
  useEffect(() => {
    const aboutQuery = "*[_type == 'about']";
    const skillsQuery = "*[_type == 'skills']";

    client.fetch(aboutQuery).then((data) => setAbouts(data));
    client.fetch(skillsQuery).then((data) => setSkills(data));
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-bounce-hover');
    }, 4000);
  }, []);

  return (
    <>
      <div className="about container container content animation content-fdc">
        <div className="about__content">
          <h1 className="heading">
            <AnimatedLetters
              letterClass={letterClass}
              strArray={heading}
              idx={10}
            />
          </h1>
          {abouts.map((about, aboutIdx) => (
            <article key={about.title + aboutIdx}>
              <div className="about__text">
                <p className="text-fadeIn">{about.description1}</p>
                <p className="text-fadeIn">{about.description2}</p>
                <p className="text-fadeIn">{about.description3}</p>
              </div>
              <div className="about__technologies text-fadeIn">
                <p className="text-fadeIn">{about.description4}</p>
                <ul className="about__list">
                  {skills.map((skill, skillIdx) => (
                    <li className="about__item" key={skill.skill + skillIdx}>
                      {skill.skill} <img src={urlFor(skill.icon)} alt="icon" />
                    </li>
                  ))}
                </ul>
                <a
                  href={icon.cv}
                  target="_blank"
                  className="button about__cv"
                  download
                >
                  Download CV
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="about__cube">
          <div className="about__cube-spinner">
            {/* {aboutCube.map((cube) => (
              <div className={`face ${cube.class}`} key={cube.id}>
                <img src={cube.skillLogoImg} alt="skill-logo" />
              </div>
            ))} */}
            <div className="face face1">
              <img src={icon.html} alt="HTML5" />
            </div>
            <div className="face face2">
              <img src={icon.react} alt="React" />
            </div>
            <div className="face face3">
              <img src={icon.css} alt="CSS3" />
            </div>
            <div className="face face4">
              <img src={icon.sass} alt="Sass" />
            </div>
            <div className="face face5">
              <img src={icon.js} alt="JavaScript" />
            </div>
            <div className="face face6">
              <img src={icon.github} alt="GitHub" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
