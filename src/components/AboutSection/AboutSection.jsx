import React from 'react';
import './AboutSection.css';
import Aboutphoto from "../../assets/aboutphoto.jpeg";
const AboutSection = () => {
  return (
    <section id="about" className="about">
      <div className="about__container">
        <h2 className="about__title">About NAURADSA</h2>

        <div className="about__content">
          <div className="about__text">
            <h3 className="about__subtitle">Background of NAURADSA</h3>
            <p className="about__paragraph">
              NAURADSA stands for Nnamdi Azikiwe University Radiography Students Association. It was formed out of the need for Radiography students at the College of Health Sciences, NAU, Okofia Nnewi Campus to have a formidable association that will see to the affairs of radiography students in the school and its environs. 
            </p>
            <p className="about__paragraph">
              NAURADSA have a constitution that is binding on all her members. The membership of the association was constitutionally mandatory for all the students in the department from 1st year to final year.

            </p>
            
            <h3 className="about__subtitle"> Aim and Objectives</h3>
            <ul className="about__list">
              <li className="about__list-item">To respect and obey the laws of the Federal Republic of Nigeria.</li>
              <li className="about__list-item">To foster and protect the interest of the members.</li>
              <li className="about__list-item">To project and portray the dignity of Radiological Medicine in Nigeria.</li>
              <li className="about__list-item">To encourage and promote among members the intellectual, academic and social pursuits.</li>
              <li className="about__list-item">To create a veritable forum for the intellectual, physical, political, social, moral and cultural development of members.</li>
            </ul>
          </div>

          <div className="about__image-container">
            <img
              src={Aboutphoto}
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