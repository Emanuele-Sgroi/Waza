import { AiFillTwitterCircle } from 'react-icons/ai';
import { FaDiscord, FaExpandArrowsAlt } from 'react-icons/fa';
import { BsCodeSlash } from 'react-icons/bs';
import { TbMessages } from 'react-icons/tb';
import { MdOutlineCampaign, MdOutlineDesignServices } from 'react-icons/md';
import { GrGroup } from 'react-icons/gr';
import { CgPatreon } from 'react-icons/cg';
import Image from 'next/image';

import code_thinking from '../public/assets/images/code_thinking.svg';
import pair_programming from '../public/assets/images/pair_programming.svg';
import HeroSection from './LandingPageUI/HeroSection';
import FeaturesHome from './LandingPageUI/FeaturesHome';
import FeaturesBlocks from './LandingPageUI/FeaturesBlocks';
import Testimonials from './LandingPageUI/Testimonials';
import Newsletter from './LandingPageUI/Newsletter';

const LandingPage = () => {
  return (
    <div className='flex flex-col min-h-screen overflow-hidden'>
      <main className='flex-grow'>
        {/*  Page sections */}
        <HeroSection />
        <FeaturesHome />
        <FeaturesBlocks />
        <Testimonials />
        <Newsletter />
      </main>
    </div>
  );
};

export default LandingPage;
