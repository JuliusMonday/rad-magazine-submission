import React from 'react';
import './MagazineSection.css';
import Button from '../Button/Button';
import Magazinephoto from "../../assets/pollpics.jpg";
const MagazineSection = () => {
  const handleMagazineSuggestions = () => {
    window.open("https://forms.gle/J9jUcYCkCErFXJMw8", "_blank");
  };
  const handleArchives = () => {
    window.open("https://t.me/+CVjtM63_jGRjMTU0", "_blank");
  };
  return (
    <section id="magazine" className="magazine">
      <div className="magazine__container">
        <h2 className="magazine__title">Our Magazine</h2>

        <div className="magazine__content">
          <div className="magazine__image-container">
            <img
              src={Magazinephoto}
              alt="NAURADSA Magazine"
              className="magazine__image"
            />
          </div>

          <div className="magazine__text">
            <h3 className="magazine__subtitle">Radiocomm Magazine</h3>
            <p className="magazine__description">
              Our annual magazine features cutting-edge research, industry trends, student achievements, and professional insights in the field of radiography and medical imaging. Each issue includes interviews with industry leaders, technical articles, case studies, and updates on the latest technological advancements in radiography.
            </p>
            <p className="magazine__description">
              The theme for this year’s edition is THE RADIOGRAPHY ODYSSEYS which underscores the series of experiences and journeys in the field of radiography profession, perhaps involving learning, professional development or innovative applications of radiographic techniques.
            </p>

            <div className="magazine__highlight">
              <h4 className="magazine__highlight-title">Opinion Poll:</h4>
              <div className="magazine__highlight-list">
                <p className="poll"><b>Following the rate of advancements in Artificial Intelligence Technology, Can ROBOTS (AI) take over radiographic positioning of patients?</b> Support your claims with factual statements.</p>
              </div>
            </div>

            <div className="magazine__buttons">
              <Button 
                variant="primary"
                onClick={handleMagazineSuggestions}
              >
                Submit Suggestions
              </Button>
              <Button variant="secondary">Read Current Issue</Button>
              <Button variant="primary" onClick={handleArchives}>
                View Archives
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MagazineSection;