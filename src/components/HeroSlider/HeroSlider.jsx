import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';

// ✅ Import Swiper core styles first
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// ✅ Then import your custom CSS
import './HeroSlider.css';
import Button from '../Button/Button';

const HeroSlider = () => {
  const handleMagazineSuggestions = () => {
    window.open("https://forms.google.com/magazinesuggestions", "_blank");
  };

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
                    onClick={slide.buttonAction || handleMagazineSuggestions}
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

const slides = [
  {
    image: "https://readdy.ai/api/search-image?query=professional%20radiography%20students%20in%20a%20university%20setting%2C%20modern%20medical%20imaging%20equipment%2C%20students%20in%20white%20lab%20coats%2C%20clean%20and%20professional%20environment%2C%20soft%20lighting%2C%20inspiring%20educational%20atmosphere%2C%20high%20quality%20professional&width=1440&height=600&seq=1&orientation=landscape",
    alt: "NAURADSA Welcome",
    title: "Welcome to NAURADSA",
    description: "Empowering future radiographers through education, community, and professional development.",
    buttonText: "Magazine Suggestions",
    buttonVariant: "primary"
  },
  {
    image: "https://readdy.ai/api/search-image?query=hands-on%20medical%20imaging%20workshop%2C%20students%20practicing%20with%20radiography%20equipment%2C%20practical%20skills%20training%2C%20educational%20laboratory%20setting%2C%20professional%20development%2C%20clean%20modern%20facility&width=400&height=200&seq=7&orientation=landscape",
    alt: "Current Magazine Issue",
    title: "Latest Magazine Issue",
    description: "Explore the latest research, techniques, and insights in our quarterly publication.",
    buttonText: "Read Issue",
    buttonVariant: "primary"
  },
  {
    image: "https://readdy.ai/api/search-image?query=professional%20conference%20or%20seminar%20setting%2C%20medical%20professionals%20networking%2C%20educational%20presentation%2C%20modern%20conference%20hall%2C%20radiography%20equipment%20exhibition%2C%20professional%20atmosphere%2C%20clean%20environment&width=1440&height=600&seq=3&orientation=landscape",
    alt: "Upcoming Events",
    title: "Upcoming Events",
    description: "Join us for workshops, conferences, and networking opportunities throughout the year.",
    buttonText: "View Calendar",
    buttonVariant: "secondary"
  },
  {
    image: "https://readdy.ai/api/search-image?query=diverse%20group%20of%20medical%20students%20collaborating%2C%20professional%20development%2C%20career%20advancement%2C%20mentorship%20program%2C%20educational%20resources%2C%20modern%20university%20campus%2C%20bright%20and%20inspiring%20environment&width=1440&height=600&seq=4&orientation=landscape",
    alt: "Membership Benefits",
    title: "Membership Benefits",
    description: "Access exclusive resources, networking opportunities, and professional development.",
    buttonText: "Join NAURADSA",
    buttonVariant: "primary"
  }
];

export default HeroSlider;
