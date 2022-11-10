import React from 'react';
import { useTitle } from '../../hooks/useTitle';
import HeroSection from './HeroSection';
import ServiceSection from './ServiceSection/ServiceSection';
import Timeline from './MyTimeline';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <HeroSection></HeroSection>
            <ServiceSection></ServiceSection>
            <Timeline></Timeline>
        </div>
    );
};

export default Home;