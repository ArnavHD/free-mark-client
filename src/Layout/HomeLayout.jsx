import React from 'react';
import HeroSection from '../components/HeroSection';
import OurJobsCategories from '../components/OurJobsCategories';
import News from '../pages/News';
import Faq from '../pages/Faq';
import StreamLine from '../pages/StreamLine';
import Packages from '../pages/Packages';

const HomeLayout = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <OurJobsCategories></OurJobsCategories>
            <News></News>
            <StreamLine></StreamLine>
            <Packages></Packages>
            <Faq></Faq>
        </div>
    );
};

export default HomeLayout;