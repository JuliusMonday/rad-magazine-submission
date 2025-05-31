import React, { useState } from 'react';
import './EventsPage.css';
import EventCard from '../components/EventCard/EventCard';
import Button from '../components/Button/Button';
import Image1 from "../assets/narsconvention.jpeg"
import Image2 from "../assets/upcomingevent1.jpeg"
import Image3 from "../assets/visit100l.jpeg"
const EventsPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const events = [
    {
          image: Image1,
          alt: "NARS CONVENTION",
          month: "Anticipate",
          day: "Next Year",
          title: "NARS CONVENTION",
          time: "9:00 AM - 5:00 PM",
          description: "The Annual Convention by the Nigerian Association of Radiography Students (NARS) holding early next year at University of Medical Sciences, Ondo.  Stay updated with NAURADSA NEWS NETWORK to know when it is time.",
          location: "Ondo"
        },
        {
          image: Image2,
          alt: "Practical Workshop",
          month: "Anticipate",
          day: "End of Session",
          title: "NAURADSA PICNIC/DINNER NIGHT",
          time: "10:00 AM - 6:00 PM",
          description: "An extracurricular event usually organized by the office of the NAURADSA Director of Socials and Welfare at the end of the session. It usually promises to be the best. Stay updated with NAURADSA NEWS NETWORK to know when it is time.",
          location: "Radiography Lab"
        },
        {
          image: Image3,
          alt: "Networking Event",
          month: "NOV",
          day: "18",
          title: "RADICARE WEEK",
          time: "9:00 AM - 5:00 PM",
          description: "An event that prior to the celebration of World Radiography Day (Nov. 18) with a lot of activities. RADIOCOMM MAGAZINE shall be launched during this event. Get ready to participate. Stay tuned with NAURADSA NEWS NETWORK.",
          location: "Faculty Hall"
        }
  ];

  const filteredEvents = activeFilter === 'all' 
    ? events 
    : events.filter(event => event.type === activeFilter);

  return (
    <div className="events-page">
      <section className="events-hero">
        <div className="events-hero__content">
          <h1>NAURADSA Events</h1>
          <p>Discover upcoming conferences, workshops, and networking opportunities</p>
        </div>
      </section>

      <section className="events-filter">
        <div className="events-filter__container">
          <button 
            className={`events-filter__button ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            All Events
          </button>
          <button 
            className={`events-filter__button ${activeFilter === 'upcoming' ? 'active' : ''}`}
            onClick={() => setActiveFilter('upcoming')}
          >
            Upcoming Events
          </button>
          <button 
            className={`events-filter__button ${activeFilter === 'past' ? 'active' : ''}`}
            onClick={() => setActiveFilter('past')}
          >
            Past Events
          </button>
        </div>
      </section>

      <section className="events-list">
        <div className="events-list__container">
          {filteredEvents.length > 0 ? (
            <div className="events-grid">
              {filteredEvents.map((event, index) => (
                <EventCard
                  key={index}
                  image={event.image}
                  alt={event.alt}
                  month={event.month}
                  day={event.day}
                  title={event.title}
                  time={event.time}
                  description={event.description}
                  location={event.location}
                />
              ))}
            </div>
          ) : (
            <div className="no-events">
              <h3>No events found</h3>
              <p>There are currently no events in this category for now. Click on All Events</p>
            </div>
          )}
        </div>
      </section>

      <section className="events-cta">
        <div className="events-cta__container">
          <div className="events-cta__content">
            <h2>Have an event idea?</h2>
            <p>Suggest an event or workshop you'd like to see organized</p>
            <Button variant="outline">Suggest an Event</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventsPage;