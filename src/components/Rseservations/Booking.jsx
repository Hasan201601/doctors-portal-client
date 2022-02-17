import { useTheme } from '@mui/material/styles';
import { Button, Container, Grid, Paper, Typography } from '@mui/material';
import React, { useState } from 'react';
import { bookings } from "../../Data/Data"
import BookingModal from './BookingModal';
import useMediaQuery from '@mui/material/useMediaQuery';
import MuiButton from '../../StyledComponents/MuiButton';

const Booking = ({ date }) => {
    const [openBooking, setBookingOpen] = useState(false);
    const [service, setService] = useState({});
    const handleBookingOpen = (service) => {
        setService(service);
        setBookingOpen(true)
    };
    const handleBookingClose = () => setBookingOpen(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <Container sx={{ my: "100px" }}>
            <Typography variant='h4' sx={{ mb: "40px", fontWeight: "bold", color: "#19D3AE", textAlign: "center" }}>Available Appointments on {new Date(date).toDateString()}</Typography>

            <Grid container spacing={3}>
                {
                    bookings.map(booking => <><Grid item xs={12} sm={6} md={4}>
                        <Paper elevation={3} sx={{ py: 5, textAlign: "center" }}>
                            <Typography sx={{ color: '#19D3AE', fontWeight: 600 }} variant="h5" gutterBottom component="div">
                                {booking.name}
                            </Typography>
                            <Typography variant="h6" gutterBottom component="div">
                                {booking.time}
                            </Typography>
                            <Typography variant="body1" color="gray" display="block" gutterBottom>
                                Fee ${booking.price}
                            </Typography>
                            <Typography variant="caption" display="block" gutterBottom>
                                {booking.space} SPACES AVAILABLE
                            </Typography>
                            <MuiButton onClick={() => handleBookingOpen(booking.name)} variant="contained">BOOK APPOINTMENT</MuiButton>
                        </Paper>
                    </Grid>
                    </>)
                }
            </Grid>
            <BookingModal
                date={date}
                openBooking={openBooking}
                handleBookingClose={handleBookingClose}
                fullScreen={fullScreen}
                service={service}
            ></BookingModal>

        </Container>
    );
};

export default Booking;