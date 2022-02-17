import React from 'react';
import Booking from '../components/Rseservations/Booking';
import ReservationBanner from '../components/Rseservations/ReservationBanner';
import Footer from '../components/Shared/Footer';
import Header from '../components/Shared/header';

const Reservation = () => {
    const [date, setDate] = React.useState(new Date());

    return (
        <div>
            <Header />
            <ReservationBanner
                date={date}
                setDate={setDate}
            />
            <Booking
                date={date}
            ></Booking>
            <Footer />
        </div>
    );
};

export default Reservation;