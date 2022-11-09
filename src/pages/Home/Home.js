import React from 'react';
import { useTitle } from '../../hooks/useTitle';
import Slider from '../Home/Slider';
import ServiceSection from './ServiceSection/ServiceSection';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Slider></Slider>
            <ServiceSection></ServiceSection>
        </div>
    );
};

export default Home;