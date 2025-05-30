import React from 'react';
import './EventCard.css';
import Button from '../Button/Button';

const EventCard = ({ 
  image, 
  alt, 
  month, 
  day, 
  title, 
  time, 
  description, 
  location 
}) => {
  return (
    <div className="event-card">
      <div className="event-card__image-container">
        <img 
          src={image} 
          alt={alt} 
          className="event-card__image"
        />
      </div>
      
      <div className="event-card__content">
        <div className="event-card__date-container">
          <div className="event-card__date-box">
            <div className="event-card__month">{month}</div>
            <div className="event-card__day">{day}</div>
          </div>
          
          <div>
            <h3 className="event-card__title">{title}</h3>
            <p className="event-card__time">{time}</p>
          </div>
        </div>
        
        <p className="event-card__description">{description}</p>
        
        <div className="event-card__footer">
          <span className="event-card__location">
            <i className="fas fa-map-marker-alt"></i> {location}
          </span>
          <Button variant="secondary">Learn More</Button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;