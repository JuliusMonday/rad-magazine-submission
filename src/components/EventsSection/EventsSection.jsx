import React from 'react';
import './EventsSection.css';
import EventCard from '../EventCard/EventCard';
import Button from '../Button/Button';

import Image1 from "../../assets/narsconvention.jpeg"
import Image2 from "../../assets/upcomingevent1.jpeg"
import Image3 from "../../assets/visit100l.jpeg"
const EventsSection = () => {
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