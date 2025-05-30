import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button/Button';
import './NotFoundPage.css';

const NotFoundPage = () => {
  return (
    <div className="not-found-page">
      <div className="not-found-container">
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
        <Link to="/">
          <Button variant="primary">Return to Homepage</Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;