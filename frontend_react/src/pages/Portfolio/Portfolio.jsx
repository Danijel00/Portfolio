import React, { useState, useEffect } from 'react';
import AnimatedLetters from '../../components/Animations/AnimatedLetters';
// import { portfolioData } from '../../constants/data';
import { UilGithubAlt, UilExternalLinkAlt } from '@iconscout/react-unicons';
import { client, urlFor } from '../../client';
import './Portfolio.scss';

const Portfolio = () => {
  const [portfolio, setPortfolio] = useState([]);
  const [letterClass, setLetterClass] = useState('text-bounce');

  let headingText = 'Portfolio'.split('');

  // FETCH DATA FROM SANITY
  useEffect(() => {
    const portfolioQuery = "*[_type == 'work']";

    client.fetch(portfolioQuery).then((data) => setPortfolio(data));
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-bounce-hover');
    }, 4000);
  }, []);

  return (
    <>
      <div className="portfolio animation">
        <div className="container">
          <h1 className="heading portfolio__heading">
            <AnimatedLetters
              letterClass={letterClass}
              strArray={headingText}
              idx={10}
            />
          </h1>
          <div className="portfolio__container">
            {portfolio.map((work, workIdx) => (
              <div className="portfolio__images" key={work.title + workIdx}>
                <div className="portfolio__images-content">
                  <img
                    src={urlFor(work.imgUrl)}
                    alt={work.ImageUrl}
                    className="portfolio-img"
                  />
                  <div className="portfolio__images-box">
                    <h2>{work.title}</h2>
                    <p>{work.description}</p>
                    <p>{work.technology}</p>
                    <div className="links">
                      <h4>Take a closer look</h4>
                      <div>
                        <a target="_blank" href={work.codeLink}>
                          <UilGithubAlt />
                        </a>
                        <a target="_blank" href={work.projectLink}>
                          <UilExternalLinkAlt />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;

///////////////////////////////DDDDDDDDDDDDDDDDDDDDD

// const renderPortfolio = (portfolio) => {
//   return (
//     <div className="portfolio__container">
//       {portfolio.map((port, idx) => {
//         return (
//           <div className="portfolio__images" key={idx}>
//             <div className="left">
//               <img
//                 src={port.imgUrl}
//                 alt={port.imageAlt}
//                 className="portfolio-img"
//               />
//               <div className="box">
//                 <h2>{port.title}</h2>
//                 <p>{port.description}</p>
//                 <p>{port.technology}</p>
//                 <div className="links">
//                   <h4>Take a closer look</h4>
//                   <div>
//                     <a target="_blank" href={port.githubUrl}>
//                       <UilGithubAlt />
//                     </a>
//                     <a target="_blank" href={port.websiteUrl}>
//                       <UilExternalLinkAlt />
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// };
