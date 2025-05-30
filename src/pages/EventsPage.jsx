import React, { useState } from 'react';
import './EventsPage.css';
import EventCard from '../components/EventCard/EventCard';
import Button from '../components/Button/Button';

const EventsPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const events = [
    { 
      type: 'upcoming', 
      image: "https://readdy.ai/api/search-image?query=professional%20conference%20setting%2C%20medical%20imaging%20event%2C%20educational%20seminar%2C%20students%20attending%2C%20modern%20venue%2C%20professional%20atmosphere&width=400&height=200&orientation=landscape",
      alt: "Annual Conference",
      month: "MAY",
      day: "30",
      title: "Annual Conference",
      time: "9:00 AM - 5:00 PM",
      description: "Join us for our flagship event featuring keynote speakers, research presentations, and networking opportunities.",
      location: "University Auditorium"
    },
    { 
      type: 'upcoming', 
      image: "https://readdy.ai/api/search-image?query=hands-on%20radiography%20workshop%2C%20students%20practicing%20techniques%2C%20medical%20equipment%2C%20educational%20setting%2C%20professional%20training&width=400&height=200&orientation=landscape",
      alt: "Practical Workshop",
      month: "JUN",
      day: "15",
      title: "Practical Workshop",
      time: "10:00 AM - 2:00 PM",
      description: "Hands-on training session on advanced imaging techniques with industry professionals.",
      location: "Radiography Lab"
    },
    { 
      type: 'upcoming', 
      image: "https://readdy.ai/api/search-image?query=networking%20event%20for%20medical%20students%2C%20professionals%20mingling%2C%20career%20fair%2C%20radiography%20industry%2C%20professional%20development&width=400&height=200&orientation=landscape",
      alt: "Networking Event",
      month: "JUL",
      day: "08",
      title: "Career Networking",
      time: "4:00 PM - 7:00 PM",
      description: "Connect with potential employers and industry leaders in radiography and medical imaging.",
      location: "Faculty Hall"
    },
    { 
      type: 'past', 
      image: "https://readdy.ai/api/search-image?query=radiography%20field%20trip%2C%20students%20visiting%20hospital%2C%20medical%20imaging%20department%2C%20educational%20tour%2C%20professional%20environment&width=400&height=200&orientation=landscape",
      alt: "Hospital Tour",
      month: "APR",
      day: "12",
      title: "Hospital Imaging Department Tour",
      time: "10:00 AM - 1:00 PM",
      description: "Exclusive tour of the state-of-the-art imaging department at University Teaching Hospital.",
      location: "UTH Awka"
    },
    { 
      type: 'past', 
      image: "https://readdy.ai/api/search-image?query=radiography%20research%20symposium%2C%20students%20presenting%20posters%2C%20academic%20event%2C%20scientific%20presentations%2C%20educational%20atmosphere&width=400&height=200&orientation=landscape",
      alt: "Research Symposium",
      month: "MAR",
      day: "22",
      title: "Student Research Symposium",
      time: "9:00 AM - 4:00 PM",
      description: "Showcase of student research projects in radiography and medical imaging.",
      location: "Science Building"
    },
    { 
      type: 'past', 
      image: "https://readdy.ai/api/search-image?query=radiography%20community%20outreach%2C%20students%20providing%20health%20services%2C%20free%20medical%20camp%2C%20public%20health%20initiative%2C%20professional%20volunteering&width=400&height=200&orientation=landscape",
      alt: "Community Outreach",
      month: "FEB",
      day: "18",
      title: "Community Health Outreach",
      time: "8:00 AM - 2:00 PM",
      description: "Free health screening and education program in the local community.",
      location: "Community Health Center"
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
              <p>There are currently no events in this category.</p>
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