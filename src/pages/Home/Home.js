import React from 'react';
import { useTitle } from '../../hooks/useTitle';
import HeroSection from './HeroSection';
import ServiceSection from './ServiceSection/ServiceSection';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <HeroSection></HeroSection>
            <ServiceSection></ServiceSection>
        </div>
    );
};

export default Home;