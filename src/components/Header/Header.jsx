import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';
import Button from '../Button/Button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
      <div className="header__container">
        <div className="header__logo">
          <Link to="/" className="header__logo-link">
            <div className="header__logo-text">NAURADSA</div>
            <span className="header__logo-subtext">
              Nnamdi Azikiwe University Radiography Students Association
            </span>
          </Link>
        </div>

        <nav className={`header__nav ${isMobileMenuOpen ? 'header__nav--open' : ''}`}>
          <NavLink to="/" className="header__nav-link" end>
            Home
          </NavLink>
          <NavLink to="/about" className="header__nav-link">
            About
          </NavLink>
          <NavLink to="/events" className="header__nav-link">
            Events
          </NavLink>
          <NavLink to="/membership" className="header__nav-link">
            Membership
          </NavLink>
          <NavLink to="/magazine" className="header__nav-link">
            Magazine
          </NavLink>
          <NavLink to="/contact" className="header__nav-link">
            Contact
          </NavLink>
          <Link to="/membership">
            <Button variant="primary" className="header__nav-button">
              Join Now
            </Button>
          </Link>
        </nav>

        <button className="header__mobile-menu" onClick={toggleMobileMenu}>
          <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
      </div>
    </header>
  );
};

export default Header;