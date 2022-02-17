import Appointment from "../components/Home/Appointment";
import BlogSection from "../components/Home/BlogSection";
import Contact from "../components/Home/Contact";
import Doctors from "../components/Home/Doctors";
import InfoCard from "../components/Home/InfoCard";
import Intro from "../components/Home/Intro";
import ServiceSection from "../components/Home/ServiceSection";
import Testimonial from "../components/Home/Testimonial";
import Treatment from "../components/Home/Treatment";
import Footer from "../components/Shared/Footer";
import Header from "../components/Shared/header";


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
            <Footer></Footer>
        </div>
    );
};

export default Home;