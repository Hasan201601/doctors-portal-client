import React from 'react';
import Appointment from '../components/Appointment';
import BlogSection from '../components/BlogSection';
import Contact from '../components/Contact';
import Doctors from '../components/Doctors';
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
            <BlogSection></BlogSection>
            <Doctors></Doctors>
            <Contact></Contact>
        </div>
    );
};

export default Home;