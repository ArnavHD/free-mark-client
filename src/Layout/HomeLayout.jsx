import React from 'react';
import HeroSection from '../components/HeroSection';
import OurJobsCategories from '../components/OurJobsCategories';
import News from '../pages/News';
import Faq from '../pages/Faq';

const HomeLayout = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <OurJobsCategories></OurJobsCategories>
            <News></News>
            <Faq></Faq>
        </div>
    );
};

export default HomeLayout;