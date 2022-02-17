import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import Chair from "../../images/chair.png"
import bg from "../../images/bg.png"
import Calendar from './Calendar';
const banner = {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage: `url(${bg})`
}

const ReservationBanner = ({ date, setDate }) => {

    return (
        <div style={banner} >
            <Container>
                <Grid container>
                    <Grid item xs={12} sm={12} md={6} lg={6} >
                        <Typography variant="h4" sx={{ fontWeight: "bold", color: "#3A4256", textAlign: "center", my: 4 }}>Appointment</Typography>
                        <Calendar
                            date={date}
                            setDate={setDate}
                        ></Calendar>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6} >
                        <img src={Chair} width="100%" alt="" />
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default ReservationBanner;