import React from 'react';
import './MagazineSection.css';
import Button from '../Button/Button';

const MagazineSection = () => {
  const handleMagazineSuggestions = () => {
    window.open("https://jutelabs-portfolio.vercel.app", "_blank");
  };

  return (
    <section id="magazine" className="magazine">
      <div className="magazine__container">
        <h2 className="magazine__title">Our Magazine</h2>

        <div className="magazine__content">
          <div className="magazine__image-container">
            <img
              src="https://readdy.ai/api/search-image?query=professional%20medical%20journal%20cover%2C%20radiography%20magazine%2C%20high%20quality%20publication%20design%2C%20medical%20imaging%20theme%2C%20educational%20content%2C%20professional%20photography%2C%20clean%20modern%20layout&width=400&height=550&seq=9&orientation=portrait"
              alt="NAURADSA Magazine"
              className="magazine__image"
            />
          </div>

          <div className="magazine__text">
            <h3 className="magazine__subtitle">The Radiography Pulse</h3>
            <p className="magazine__description">
              Our quarterly magazine features cutting-edge research, industry trends, student achievements, and professional insights in the field of radiography and medical imaging.
            </p>
            <p className="magazine__description">
              Each issue includes interviews with industry leaders, technical articles, case studies, and updates on the latest technological advancements in radiography.
            </p>

            <div className="magazine__highlight">
              <h4 className="magazine__highlight-title">Current Issue Highlights:</h4>
              <ul className="magazine__highlight-list">
                <li>Advances in Digital Radiography Technology</li>
                <li>Interview with Dr. Sarah Johnson, Chief Radiologist at University Hospital</li>
                <li>Student Research Spotlight: Innovative Approaches to Radiation Safety</li>
                <li>Career Pathways: Specializations in Radiography</li>
                <li>Alumni Success Stories: Where Are They Now?</li>
              </ul>
            </div>

            <div className="magazine__buttons">
              <Button 
                variant="primary"
                onClick={handleMagazineSuggestions}
              >
                Submit Suggestions
              </Button>
              <Button variant="secondary">Read Current Issue</Button>
              <Button variant="outline">Browse Archives</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MagazineSection;