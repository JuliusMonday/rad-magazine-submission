import React from 'react';
import HeroSlider from '../components/HeroSlider/HeroSlider';
import AboutSection from '../components/AboutSection/AboutSection';
import EventsSection from '../components/EventsSection/EventsSection';
import MembershipBenefits from '../components/MembershipBenefits/MembershipBenefits';
import MagazineSection from '../components/MagazineSection/MagazineSection';

const HomePage = () => {
  return (
    <div className="home-page">
      <HeroSlider />
      <AboutSection />
      <EventsSection />
      <MembershipBenefits />
      <MagazineSection />
    </div>
  );
};

export default HomePage;