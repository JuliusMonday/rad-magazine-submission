import React from 'react';
import './Footer.css';
import Button from '../Button/Button';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__grid">
          {/* About Column */}
          <div className="footer__column">
            <h3 className="footer__column-title">NAURADSA</h3>
            <p className="footer__description">
              Nnamdi Azikiwe University Radiography Students Association
            </p>
            <p className="footer__small-text">
              Empowering future radiographers through education, community, and professional development.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="footer__column">
            <h3 className="footer__column-title">Quick Links</h3>
            <ul className="footer__links">
              <li><a href="#home" className="footer__link">Home</a></li>
              <li><a href="#about" className="footer__link">About Us</a></li>
              <li><a href="#events" className="footer__link">Events</a></li>
              <li><a href="#membership" className="footer__link">Membership</a></li>
              <li><a href="#magazine" className="footer__link">Magazine</a></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="footer__column">
            <h3 className="footer__column-title">Contact Us</h3>
            <ul className="footer__contact">
              <li className="footer__contact-item">
                <i className="fas fa-map-marker-alt footer__contact-icon"></i>
                Department of Radiography, Nnamdi Azikiwe University, Okofia Nnewi Campus.
              </li>
              <li className="footer__contact-item">
                <i className="fas fa-envelope footer__contact-icon"></i>
                nauradsaofficial@gmail.com
officialnauradsa@gmail.com
              </li>
              <li className="footer__contact-item">
                <i className="fas fa-phone footer__contact-icon"></i>
                +2348104987893 
+2347065371205
              </li>
            </ul>
          </div>

          {/* Social & Newsletter Column */}
          <div className="footer__column">
            <h3 className="footer__column-title">Connect With Us</h3>
            <div className="footer__social">
              <a href="https://www.facebook.com/share/14Eg6KKNJSP/" className="footer__social-link">
                <i className="fab fa-facebook"></i>
              </a>
              {/* Instagram icon */}
              <a href="https://www.instagram.com/nauradsa_tv?utm_source=qr&igsh=MW9uc244ZDkzb3lvag==" className="footer__social-link">
                <i className="fab fa-instagram"></i>
              </a>
              {/* tiktok icon */}
              <a href="https://www.tiktok.com/@nauradsa_unizik?_t=ZM-8woGhY6p8ly&_r=1" className="footer__social-link">
                <i className="fab fa-tiktok"></i>
              </a>
              {/* telegram icon */}
              <a href="https://t.me/+CVjtM63_jGRjMTU0" className="footer__social-link">
                <i className="fab fa-telegram"></i> 
                </a>
            </div>

            <h3 className="footer__column-title">Newsletter</h3>
            <div className="footer__newsletter">
              <input
                type="email"
                placeholder="Your email"
                className="footer__newsletter-input"
              />
              <Button variant="primary" className="footer__newsletter-button">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            &copy; {currentYear} NAURADSA. All rights reserved.
          </p>

          <div className="footer__dev">
            <span className="footer__dev-text">Developed By JuTeLabs:</span>
            <span classname="footer__dev-number">07068209902</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;