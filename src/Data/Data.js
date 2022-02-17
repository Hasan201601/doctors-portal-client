import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WifiCalling3Icon from '@mui/icons-material/WifiCalling3';
import flouride from "../images/fluoride.png";
import cavity from "../images/cavity.png";
import whitening from "../images/whitening.png";
import person1 from "../images/people-1.png"
import person2 from "../images/people-2.png"
import person3 from "../images/people-3.png";
import doctor from "../images/doctor-small.png"

export const infoData = [
    {
        title: "Opening Hours",
        description: 'We are open 7 Days',
        Icon: AccessTimeIcon,
        background: '#1CC7C1'
    },
    {
        title: "Visit Our Location",
        description: 'Brooklyn, NY 10003 USA',
        Icon: LocationOnIcon,
        background: '#3A4256'
    },
    {
        title: "Contact Us Now",
        description: '+15697854124',
        Icon: WifiCalling3Icon,
        background: '#1CC7C1'
    },
]

export const serviceData = [
    {
        Icon: flouride,
        title: "Flouride Treatment",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur non sapiente sint? Vel, explicabo quibusdam."
    },
    {
        Icon: cavity,
        title: "Cavity Filling",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur non sapiente sint? Vel, explicabo quibusdam."
    },
    {
        Icon: whitening,
        title: "Teeth Whitening",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur non sapiente sint? Vel, explicabo quibusdam."
    },
]

export const testimonialData = [
    {
        review: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using ‘Content here",
        state: "California",
        name: "Winson Harry",
        image: person1
    },
    {
        review: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using ‘Content here",
        state: "California",
        name: "Winson Harry",
        image: person2
    },
    {
        review: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using ‘Content here",
        state: "California",
        name: "Winson Harry",
        image: person3
    },
]


export const blogData = [
    {
        review: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point ",
        state: "California",
        title: "2 times of brush in a day can keep you healthy",
        name: "Dr. Caudi",
        date: "15 May, 2020",
        image: person1
    },
    {
        review: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point ",
        state: "California",
        title: "The tooth cancer is taking a challenge",
        name: "Dr. Sarah Mitchell",
        date: "20 June,2020",
        image: person3
    }
]
export const doctorData = [
    {
        name: "Dr. Caudi",
        phone: "+61 452 200 126",
        image: doctor
    },
    {
        name: "Dr. Caudi",
        phone: "+61 452 200 126",
        image: doctor
    },
    {
        name: "Dr. Caudi",
        phone: "+61 452 200 126",
        image: doctor
    },
]

export const bookings = [
    {
        id: 1,
        name: 'Teeth Orthodonics',
        time: '08.00 AM - 09.00 AM',
        price: 20,
        space: 10,
    },
    {
        id: 2,
        name: 'Cosmetic Dentistry',
        time: '09.00 AM - 10.00 AM',
        price: 15,
        space: 8,
    },
    {
        id: 3,
        name: 'Teeth Cleaning',
        time: '10.00 AM - 11.00 AM',
        price: 17,
        space: 9,
    },
    {
        id: 4,
        name: 'Cavity Protection',
        time: '11.00 AM - 12.00 PM',
        price: 19,
        space: 5,
    },
    {
        id: 5,
        name: 'Pediatric Dental',
        time: '06.00 PM - 07.00 PM',
        price: 25,
        space: 10,
    },
    {
        id: 6,
        name: 'Oral Surgery',
        time: '07.00 PM - 08.00 PM',
        price: 35,
        space: 10,
    },
]