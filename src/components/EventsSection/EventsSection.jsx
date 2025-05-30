import React from 'react';
import './EventsSection.css';
import EventCard from '../EventCard/EventCard';
import Button from '../Button/Button';

const EventsSection = () => {
  const events = [
    {
      image: "https://readdy.ai/api/search-image?query=professional%20workshop%20setting%2C%20educational%20seminar%2C%20medical%20imaging%20presentation%2C%20students%20engaged%20in%20learning%2C%20modern%20conference%20room%2C%20professional%20development%20event%2C%20clean%20environment&width=400&height=200&seq=6&orientation=landscape",
      alt: "Annual Conference",
      month: "MAY",
      day: "30",
      title: "Annual Conference",
      time: "9:00 AM - 5:00 PM",
      description: "Join us for our flagship event featuring keynote speakers, research presentations, and networking opportunities.",
      location: "University Auditorium"
    },
    {
      image: "https://readdy.ai/api/search-image?query=hands-on%20medical%20imaging%20workshop%2C%20students%20practicing%20with%20radiography%20equipment%2C%20practical%20skills%20training%2C%20educational%20laboratory%20setting%2C%20professional%20development%2C%20clean%20modern%20facility&width=400&height=200&seq=7&orientation=landscape",
      alt: "Practical Workshop",
      month: "JUN",
      day: "15",
      title: "Practical Workshop",
      time: "10:00 AM - 2:00 PM",
      description: "Hands-on training session on advanced imaging techniques with industry professionals.",
      location: "Radiography Lab"
    },
    {
      image: "https://readdy.ai/api/search-image?query=professional%20networking%20event%2C%20healthcare%20professionals%20mingling%2C%20career%20fair%20atmosphere%2C%20medical%20imaging%20industry%20representatives%2C%20professional%20development%20opportunity%2C%20clean%20modern%20venue&width=400&height=200&seq=8&orientation=landscape",
      alt: "Networking Event",
      month: "JUL",
      day: "08",
      title: "Career Networking",
      time: "4:00 PM - 7:00 PM",
      description: "Connect with potential employers and industry leaders in radiography and medical imaging.",
      location: "Faculty Hall"
    }
  ];

  return (
    <section id="events" className="events">
      <div className="events__container">
        <h2 className="events__title">Upcoming Events</h2>

        <div className="events__grid">
          {events.map((event, index) => (
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

        <div className="events__button-container">
          <Button variant="outline">View All Events</Button>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;