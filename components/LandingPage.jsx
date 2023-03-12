import { useRef } from 'react';

import HeroSection from './LandingPageUI/HeroSection';
import FeaturesHome from './LandingPageUI/FeaturesHome';
import FeaturesBlocks from './LandingPageUI/FeaturesBlocks';
import Testimonials from './LandingPageUI/Testimonials';
import Newsletter from './LandingPageUI/Newsletter';

const LandingPage = () => {
  const otherSectionRef = useRef(null);

  const scrollToOtherSection = () => {
    otherSectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='flex flex-col min-h-screen overflow-hidden'>
      <main className='flex-grow'>
        {/*  Page sections */}
        <HeroSection scrollDown={scrollToOtherSection} />
        <div ref={otherSectionRef}>
          <FeaturesHome />
        </div>
        <FeaturesBlocks />
        <Testimonials />
        <Newsletter />
      </main>
    </div>
  );
};

export default LandingPage;
