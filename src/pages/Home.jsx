import React from 'react';
import Appointment from '../components/Appointment';
import Blog from '../components/Blog';
import Header from '../components/header';
import InfoCard from '../components/InfoCard';
import Intro from '../components/Intro';
import ServiceSection from '../components/ServiceSection';
import Testimonial from '../components/Testimonial';
import Treatment from '../components/Treatment';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Intro></Intro>
            <InfoCard></InfoCard>
            <ServiceSection></ServiceSection>
            <Treatment></Treatment>
            <Appointment></Appointment>
            <Testimonial></Testimonial>
            <Blog></Blog>
        </div>
    );
};

export default Home;