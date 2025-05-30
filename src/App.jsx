import React from 'react';
import Header from './components/Header/Header';
import HeroSlider from './components/HeroSlider/HeroSlider';
import AboutSection from './components/AboutSection/AboutSection';
import EventsSection from './components/EventsSection/EventsSection';
import MembershipBenefits from './components/MembershipBenefits/MembershipBenefits';
import MagazineSection from './components/MagazineSection/MagazineSection';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <HeroSlider />
      <AboutSection />
      <EventsSection />
      <MembershipBenefits />
      <MagazineSection />
      <Footer />
    </div>
  );
}

export default App;