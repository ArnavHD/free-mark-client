import React from 'react';
import HeroSection from '../components/HeroSection';
import OurJobsCategories from '../components/OurJobsCategories';

const HomeLayout = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <OurJobsCategories></OurJobsCategories>
        </div>
    );
};

export default HomeLayout;