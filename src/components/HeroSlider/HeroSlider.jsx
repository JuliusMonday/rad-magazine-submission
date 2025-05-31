import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './HeroSlider.css';
import Button from '../Button/Button';

// importing images
import Slide1 from "../../assets/welcome1.jpeg";
import Slide2 from "../../assets/visit100l.jpeg";
import Slide3 from "../../assets/narsvisit.jpeg";
import Slide4 from "../../assets/convocation.jpeg";

const HeroSlider = () => {
  const navigate = useNavigate();
  
  // Navigation handlers
  const handleJoinNow = () => navigate('/membership');
  const handleLearnMore = () => navigate('/about');
  const handleViewEvents = () => navigate('/events');
  
  // External link handler
  const handleReadIssue = () => {
    window.open("https://your-magazine-link-here.com", "_blank");
  };

  // Define slides array INSIDE the component
  const slides = [
    {
      image: Slide1,
      alt: "NAURADSA Welcome",
      title: "Welcome to NAURADSA",
      description: "A formidable association that see to the affairs of radiography students through education, community, and professional development.",
      buttonText: "Learn More",
      buttonVariant: "primary",
      buttonAction: handleLearnMore
    },
    {
      image: Slide2,
      alt: "Current Magazine Issue",
      title: "Radiocomm Magazine Issues",
      description: 'The Radiocomm Magazine is the annual magazine from the Editorial Board of the NAURADSA Public Relations Officer, which aims to educate, inform, entertain, and engage readers with various contents about the Radiography Profession, not just as a practitioner but also as a patient. This year, the magazine will be published with the theme of "The Future of Radiography".',
      buttonText: "Read Issue",
      buttonVariant: "primary",
      buttonAction: handleReadIssue
    },
    {
      image: Slide3,
      alt: "Upcoming Events",
      title: "Upcoming Events",
      description: 'Join us for Radicare Week, NAURADSA Picnics, Dinner Nights, Magazine Launching, Football Competition, Seminars, Conferences and other activities spanning through the year. Stay updated through the NAURADSA NEWS NETWORK from the Public Relations Officer.',
      buttonText: "View Events",
      buttonVariant: "secondary",
      buttonAction: handleViewEvents
    },
    {
      image: Slide4,
      alt: "Membership Benefits",
      title: "Membership Benefits",
      description: "Access exclusive resources, networking opportunities, and professional development.",
      buttonText: "Join NAURADSA",
      buttonVariant: "primary",
      buttonAction: handleJoinNow
    }
  ];

  return (
    <section id="home" className="hero">
      <Swiper
        modules={[Pagination, Autoplay, Navigation]}
        pagination={{ clickable: true }}
        navigation={{
          nextEl: ".hero__button-next",
          prevEl: ".hero__button-prev",
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        speed={800}
        className="hero__slider"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="hero__slide">
              <div className="hero__overlay"></div>
              <img
                src={slide.image}
                alt={slide.alt}
                className="hero__image"
              />
              <div className="hero__content">
                <div className="hero__text-container">
                  <h1 className="hero__title">{slide.title}</h1>
                  <p className="hero__description">{slide.description}</p>
                  <Button 
                    variant={slide.buttonVariant} 
                    className="hero__button"
                    onClick={slide.buttonAction}
                  >
                    {slide.buttonText}
                  </Button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        <div className="hero__button-prev">
          <i className="fas fa-chevron-left"></i>
        </div>
        <div className="hero__button-next">
          <i className="fas fa-chevron-right"></i>
        </div>
      </Swiper>
    </section>
  );
};

export default HeroSlider;