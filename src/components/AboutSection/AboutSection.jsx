import React from 'react';
import './AboutSection.css';

const AboutSection = () => {
  return (
    <section id="about" className="about">
      <div className="about__container">
        <h2 className="about__title">About NAURADSA</h2>

        <div className="about__content">
          <div className="about__text">
            <h3 className="about__subtitle">Our Mission & Vision</h3>
            <p className="about__paragraph">
              The Nnamdi Azikiwe University Radiography Students Association
              (NAURADSA) is dedicated to fostering academic excellence,
              professional development, and community among radiography students.
            </p>
            <p className="about__paragraph">
              We aim to bridge the gap between academic learning and
              professional practice by providing resources, networking
              opportunities, and hands-on experiences that prepare our members
              for successful careers in radiography.
            </p>
            
            <h3 className="about__subtitle">Our Goals</h3>
            <ul className="about__list">
              <li className="about__list-item">Promote academic excellence and research in radiography</li>
              <li className="about__list-item">Facilitate professional development through workshops and seminars</li>
              <li className="about__list-item">Create networking opportunities with industry professionals</li>
              <li className="about__list-item">Advocate for the radiography profession within healthcare</li>
              <li className="about__list-item">Support community outreach and health education initiatives</li>
            </ul>
          </div>

          <div className="about__image-container">
            <img
              src="https://readdy.ai/api/search-image?query=diverse%20group%20of%20radiography%20students%20in%20a%20laboratory%20setting%2C%20working%20with%20advanced%20imaging%20equipment%2C%20collaborative%20learning%20environment%2C%20professional%20development%2C%20university%20campus%2C%20clean%20modern%20facility%2C%20educational%20atmosphere&width=600&height=500&seq=5&orientation=landscape"
              alt="NAURADSA Students"
              className="about__image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;