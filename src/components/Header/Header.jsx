import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';
import Button from '../Button/Button';
import logo from '../../assets/mainRadlogo.png';


const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
      <div className="header__container">
        <div className="header__logo">
          <Link to="/" className="header__logo-link">
            <div className="header__logo-text">
              <img src={ logo } alt="Rad Logo" className="header__logo-image" />
               <span className="header__logo-subtext">
              Nnamdi Azikiwe University Radiography Students Association
            </span>
            </div>
          </Link>
        </div>

        <nav className={`header__nav ${isMobileMenuOpen ? 'header__nav--open' : ''}`}>
          <NavLink to="/" className="header__nav-link" end onClick={() => setIsMobileMenuOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/about" className="header__nav-link" onClick={() => setIsMobileMenuOpen(false)}>
            About
          </NavLink>
          <NavLink to="/events" className="header__nav-link" onClick={() => setIsMobileMenuOpen(false)}>
            Events
          </NavLink>
          <NavLink to="/membership" className="header__nav-link" onClick={() => setIsMobileMenuOpen(false)}>
            Membership
          </NavLink>
          <NavLink to="/magazine" className="header__nav-link" onClick={() => setIsMobileMenuOpen(false)}>
            Magazine
          </NavLink>
          <NavLink to="/contact" className="header__nav-link" onClick={() => setIsMobileMenuOpen(false)}>
            Contact
          </NavLink>
          <Link to="/membership" onClick={() => setIsMobileMenuOpen(false)}>
            <Button variant="primary" className="header__nav-button">
              Join Now
            </Button>
          </Link>
          
          {/* Dark Mode Toggle */}
          <button className="dark-mode-toggle" onClick={toggleDarkMode}>
            <i className={`fas ${darkMode ? 'fa-sun' : 'fa-moon'}`}></i>
            <span>{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
          </button>
        </nav>

        <div className="header__right">
          <button className="dark-mode-toggle mobile-only" onClick={toggleDarkMode}>
            <i className={`fas ${darkMode ? 'fa-sun' : 'fa-moon'}`}></i>
          </button>
          <button className="header__mobile-menu" onClick={toggleMobileMenu}>
            <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;