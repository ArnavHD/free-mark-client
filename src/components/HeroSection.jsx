import React from 'react';
import Navbar from './Navbar';
import HeroText from './HeroText';

const HeroSection = () => {
    return (
      <div className=' min-h-screen bg-[url("https://i.ibb.co/qLdBs00G/Stock-Snap-IYCGUILNRQ.jpg")] bg-no-repeat bg-cover'>
        <Navbar></Navbar>
        <HeroText></HeroText>
      </div>
    );
};

export default HeroSection;