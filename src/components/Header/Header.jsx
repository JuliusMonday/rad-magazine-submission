import React, { useState, useEffect } from 'react';
import './Header.css';
import Button from '../Button/Button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
      <div className="header__container">
        <div className="header__logo">
          <div className="header__logo-text">NAURADSA</div>
          <span className="header__logo-subtext">
            Nnamdi Azikiwe University Radiography Students Association
          </span>
        </div>

        <nav className="header__nav">
          <a href="#home" className="header__nav-link">Home</a>
          <a href="#about" className="header__nav-link">About</a>
          <a href="#events" className="header__nav-link">Events</a>
          <a href="#membership" className="header__nav-link">Membership</a>
          <a href="#magazine" className="header__nav-link">Magazine</a>
          <Button variant="primary" className="header__nav-button">Join Now</Button>
        </nav>

        <button className="header__mobile-menu">
          <i className="fas fa-bars"></i>
        </button>
      </div>
    </header>
  );
};

export default Header;