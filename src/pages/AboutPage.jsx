import React from 'react';
import './AboutPage.css';
import Button from '../components/Button/Button';

const AboutPage = () => {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="about-hero__content">
          <h1>About NAURADSA</h1>
          <p>Learn about our mission, vision, and the team behind our association</p>
        </div>
      </section>

      <section className="mission-vision">
        <div className="mission-vision__container">
          <div className="mission-vision__item">
            <h2>Our Mission</h2>
            <p>To empower radiography students through quality education, professional development, and community engagement.</p>
          </div>
          <div className="mission-vision__item">
            <h2>Our Vision</h2>
            <p>To be the leading radiography student association in Nigeria, producing world-class professionals.</p>
          </div>
        </div>
      </section>

      <section className="history">
        <div className="history__container">
          <h2>Our History</h2>
          <p>
            Founded in 2005, the Nnamdi Azikiwe University Radiography Students Association (NAURADSA) has been at the forefront of 
            promoting excellence in radiography education for over 18 years. What started as a small group of passionate students 
            has grown into a thriving community of over 500 members.
          </p>
          <p>
            Throughout our history, we've organized numerous workshops, conferences, and community outreach programs that have 
            impacted thousands of students and community members. Our alumni network includes leading radiography professionals 
            working in top healthcare institutions across Nigeria and internationally.
          </p>
        </div>
      </section>

      <section className="executives">
        <div className="executives__container">
          <h2>Meet Our Executives</h2>
          <div className="executives__grid">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="executive-card">
                <div className="executive-card__image"></div>
                <h3>Executive Name</h3>
                <p>Position Title</p>
                <p className="executive-card__bio">
                  Brief bio about the executive's background and responsibilities.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-section__container">
          <h2>Ready to Join Our Community?</h2>
          <p>Become a member today and access exclusive resources and opportunities</p>
          <Button variant="primary">Join Now</Button>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;