import React from 'react';
import './AboutPage.css';
import Button from '../components/Button/Button';

import President from "../assets/President.jpeg";             // no trailing space
import VicePresident from "../assets/VicePresident.jpeg";
import PublicRelationsOfficer from "../assets/PublicRelationsOfficer.jpeg";
import AssistantPRO from "../assets/AssistantPRO.jpeg";
import SecretaryGeneral from "../assets/SecretaryGeneral.jpeg";
import AssistantSecretaryGeneral from "../assets/AssistantSecretaryGeneral.jpeg";
import AssistantDirectorOfHealth from "../assets/AssistantDirectorOfHealth.jpeg";
import FinancialSecretary from "../assets/FinancialSecretary.jpeg";
import DOS from "../assets/dos.jpeg";                        // lowercase match
import AssistantDOS from "../assets/AssistantDOS.jpeg";
import DirectorOfHealth from "../assets/DirectorOfHealth.jpeg";
import DirectorOfReligiousAffairs from "../assets/DirectorOfReligiousAffairs.jpeg";
import DirectorOfGames from "../assets/DirectorOfGames.jpeg";
import DirectorOfAcademics from "../assets/DirectorOfAcademics.jpeg";
import AssistantDirectorOfGames from "../assets/AssistantDirectorOfGames.jpeg";
import AssistantDirectorOfAcademics from "../assets/AssistantDirectorOfAcademics.jpeg";
import Treasurer from "../assets/Treasurer.jpeg";

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
            Records have it that NAURADSA was initially formed on October 2005 when the Pioneer Radiography Students came to the Nnewi Campus of the Nnamdi Azikiwe University. On the 19th of July 2006, the Pioneer Executive members were elected into office. The executives at the time of election were eight in number comprising of the President, the Vice President, the General Secretary, the Public Relations Officer, the Financial Secretary, the Treasurer, the Director of Sports and Welfare and the Director of Academics.
          </p>
          <p>
            NAURADSA have a constitution that is binding on all the members which is subject to review. The membership of the association was constitutionally mandatory for all the members of the department from 2nd year to final year, the first year students of the department were initially excluded from the association because there was a sister association in the Awka Campus called First Year Health and Medical Science Students Association (FYHMSA). But in March 2010, the House of Representatives passed a Bill to incorporate all First Year Radiography Students into the association which was approved, and then the year one students officially became NAURADSITES.
          </p>
          <p>
            The First NAURADSA Election was overseen by the RADECO (Radiography Electoral Commission) which was chaired by Ufondu Chukwunonso I. in 2006. The first President was Abosi Michael and the Vice President was Udechukwu Ezinne. In 2007, Ufondu Chukwunonso I. in turn became the Second President of NAURADSA. A relatively good amount of progress was made during these two years and the association gained great recognition in the Campus, a foundation the future leaders of the association came to appreciate.
On the 1st of February, the Association swore-in what came to be the most eagerly anticipated executives of NAURADSA, and the members expected nothing less than Success from them. 100 days later, the new executives published the Maiden edition of the Association's magazine- X-Podium, and also held the first ever NAURADSA students Health Week that same month of May 2010. By June 2010, Obodozie Ijeoma became the Acting President until October 2010.
          </p>
          <p>
            Since then, several elections have been conducted in the association, and NAURADSA has proven to be highly formidable, prestigious and naturally ahead every other departmental association in the campus. The evidence supporting the claims that NAURADSA is naturally ahead can be brought from NAURADSA having emerged winners of various competitions (football, volleyball, elections, essays, quizzes, etc) and even awards. 
Currently, NAURADSA is led by its 18th Executive Council 2025/2026 academic session ably led by <b>Giant Comr. Orji Chibuike Collins </b> 
 NAURADSA Ginger!!
          </p>
        </div>
      </section>

      <section class="objectives-section">
    <div class="objectives-card">
      <h2>Fundamental Aims and Objectives</h2>
      <ul class="objectives-list">
        <li>To respect and obey the laws of the Federal Republic of Nigeria.</li>
        <li>To foster and protect the interest of the members.</li>
        <li>To project and portray the dignity of Radiological Medicine in Nigeria.</li>
        <li>To encourage and promote among members the intellectual, academic and social pursuits.</li>
        <li>To create a veritable forum for the intellectual, physical, political, social, moral and cultural development of members.</li>
        <li>To establish effective communication with Nnamdi Azikiwe University Awka and College of Health Science officials so that the rights, liberties, privileges and obligations of Medical Radiography and Radiological students are maintained and protected.</li>
        <li>To maintain and advance cordial relationships among all members, irrespective of nationality, state of origin, sex, religion, and/or political belief.</li>
        <li>To promote and maintain cordial relationships with similar and other student associations within and outside Nnamdi Azikiwe University irrespective of locality.</li>
        <li>To encourage and maintain discipline among members.</li>
      </ul>
    </div>
  </section>

<section className="executives">
        <div className="executives__container">
          <h2>Meet Our Executives</h2>
          <div className="executives__grid">
            {/* President */}
            <div className="executive-card">
              <div className="executive-card__image">
                <img src={President} alt="Orji Chibuike Collins" />
              </div>
              <h3>Orji Chibuike Collins</h3>
              <p>President</p>
              <p className="executive-card__bio">
                "Do something today that your future self would be grateful for."
              </p>
            </div>

            {/* Vice President */}
            <div className="executive-card">
              <div className="executive-card__image">
                <img src={VicePresident} alt="Uzuegbuna Nwakanwa" />
              </div>
              <h3>Uzuegbuna Nwakanwa (Zanna)</h3>
              <p>Vice President</p>
              <p className="executive-card__bio">
                "You can have all the talent in the World but if you stay silent, no one will ever get to experience your Art. Be Visible."
              </p>
            </div>

            {/* Public Relations Officer */}
            <div className="executive-card">
              <div className="executive-card__image">
                <img src={PublicRelationsOfficer} alt="Omerike Chisom Franklin" />
              </div>
              <h3>Omerike Chisom Franklin</h3>
              <p>Public Relations Officer</p>
              <p className="executive-card__bio">
                "The only risk is the risk of not taking risks, but taking unnecessary risks is riskier than the risk of not taking risks."
              </p>
            </div>

            {/* Assistant PRO */}
            <div className="executive-card">
              <div className="executive-card__image">
                <img src={AssistantPRO} alt="Udeh Ifechukwu Valentine" />
              </div>
              <h3>Udeh Ifechukwu Valentine (BenVal)</h3>
              <p>Assistant PRO</p>
              <p className="executive-card__bio">
                "I don't fear failing, I fear giving up trying to rise"
              </p>
            </div>

            {/* Secretary General */}
            <div className="executive-card">
              <div className="executive-card__image">
                <img src={SecretaryGeneral} alt="Johnson Ogochukwu Marvellous" />
              </div>
              <h3>Johnson Ogochukwu Marvellous</h3>
              <p>Secretary General</p>
              <p className="executive-card__bio">
                "Always be kind!, the love you give out will always find it's way back to you."
              </p>
            </div>

            {/* Assistant Secretary General */}
            <div className="executive-card">
              <div className="executive-card__image">
                <img src={AssistantSecretaryGeneral} alt="Ngene Maryfavour Chioma" />
              </div>
              <h3>Ngene Maryfavour Chioma</h3>
              <p>Assistant Secretary General</p>
              <p className="executive-card__bio">
                "Serving NAUR"
              </p>
            </div>
            {/* {Director of Health} */}
            <div className="executive-card">
              <div className="executive-card__image">
                <img src={DirectorOfHealth} alt="Onyebuchi Dora Ifeyinwa" />
              </div>
              <h3>Onyebuchi Dora Ifeyinwa</h3>
              <p>Director of Health</p>
              <p className="executive-card__bio">
                "Live, don’t just exist!!!"
              </p>
            </div>
            {/* Asst DOH */}
            <div className="executive-card">
              <div className="executive-card__image">
                <img src={AssistantDirectorOfHealth} alt="Ubadineke Chinenyenwa Janet" />
              </div>
              <h3>Ubadineke Chinenyenwa Janet</h3>
              <p>Asst Director of Health & Asst. D.O.G</p>
              <p className="executive-card__bio">
                "Live, don’t just exist!!!"
              </p>
            </div>

            {/* Financial Secretary */}
            <div className="executive-card">
              <div className="executive-card__image">
                <img src={FinancialSecretary} alt="Chikamnele Favour" />
              </div>
              <h3>Chikamnele Favour</h3>
              <p>Financial Secretary</p>
              <p className="executive-card__bio">
                "Take risks. If you win, you will be happy. If you lose, you will be wise."
              </p>
            </div>

            {/* DOS */}
            <div className="executive-card">
              <div className="executive-card__image">
                <img src={DOS} alt="Uguru Joseph ifeanyichukwu" />
              </div>
              <h3>Uguru Joseph ifeanyichukwu</h3>
              <p>NAURADSA DOS</p>
              <p className="executive-card__bio">
                "You can never be unlucky for the whole 365 days"
              </p>
            </div>

            {/* Assistant DOS */}
            <div className="executive-card">
              <div className="executive-card__image">
                <img src={AssistantDOS} alt="Okeke Chiamaka Silver" />
              </div>
              <h3>Okeke Chiamaka Silver(Steph)</h3>
              <p>NAURADSA ASSISTANT DOS</p>
              <p className="executive-card__bio">
                "Live and let live"
              </p>
            </div>

            {/* Director of Religious Affairs */}
            <div className="executive-card">
              <div className="executive-card__image">
                <img src={DirectorOfReligiousAffairs} alt="IBEGBULEM UGONNA GEORGE" />
              </div>
              <h3>IBEGBULEM UGONNA GEORGE</h3>
              <p>Director of Religious Affairs (DOR)</p>
              <p className="executive-card__bio">
                "No wahala, it is well."
              </p>
            </div>

            {/* Director of Games */}
            <div className="executive-card">
              <div className="executive-card__image">
                <img src={DirectorOfGames} alt="OKEKE PASCAL CHIDUBEM" />
              </div>
              <h3>COMR. OKEKE PASCAL CHIDUBEM</h3>
              <p>Director of Games (D.O.G)</p>
              <p className="executive-card__bio">
                "life no supposed hard"
              </p>
            </div>

            {/* Assistant DOG */}
            <div className="executive-card">
              <div className="executive-card__image">
                <img src={AssistantDirectorOfGames} alt="uche Chinwe favour" />
              </div>
              <h3>uche Chinwe favour</h3>
              <p>Assistant Director of Games</p>
              <p className="executive-card__bio">
                "The goal isn’t just to compete—it’s to connect"
              </p>
            </div>
            {/*Director of Academics */}
            <div className="executive-card">
              <div className="executive-card__image">
                <img src={DirectorOfAcademics} alt="Onyeneto Kennedy Chikamjieko" />
              </div>
              <h3>Onyeneto Kennedy Chikamjieko</h3>
              <p>Director of Academics</p>
              <p className="executive-card__bio">
                "if you want the best,then you have to give the best."
              </p>
            </div>
            {/* Assistant Director of Academics */}
            <div className="executive-card">
              <div className="executive-card__image">
                <img src={AssistantDirectorOfAcademics} alt="Asonye Daniel Ebubechukwu" />
              </div>
              <h3>Asonye Daniel Ebubechukwu (Emerald)</h3>
              <p>Assistant Director of Academics</p>
              <p className="executive-card__bio">
                "if you want the best,then you have to give the best."
              </p>
            </div>

            {/* Treasurer */}
            <div className="executive-card">
              <div className="executive-card__image">
                <img src={Treasurer} alt="Ifeoma Jennifer Nwogodo" />
              </div>
              <h3>Ifeoma Jennifer Nwogodo (Jenex)</h3>
              <p>Treasurer</p>
              <p className="executive-card__bio">
                "Feed your mind with Faith.. Feed it truth and Feed it with love ❤️💙"
              </p>
            </div>
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