import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import MuiButton from '../../StyledComponents/MuiButton';
import doctor from "../../images/doctor.png";
import appointBg from "../../images/appointment-bg.png"
import { makeStyles } from '@mui/styles';

const useStyle = makeStyles({
    root: {

        height: 370,
        backgroundImage: `url(${appointBg})`,
        objectFit: "cover",
        backgroundPosition: "center",
        position: "relative",
        margin: "150px 0",
    },
    bg: {
        backgroundColor: "#3a4256dc",
        height: 370,
        top: "0",
        right: "0",
        left: 0,
        zIndex: 4
    },
    child: {
        position: "absolute",
        top: "0",
        right: "0",
        left: 0,
        zIndex: 2,

        height: 370,
        display: "flex",
        alignItems: 'center',

    },
})

const Appointment = () => {
    const { root, bg, child } = useStyle()
    return (
        <div className={root}>
            <div className={bg}></div>
            <div className={child}>
                <Container>
                    <Grid container spacing={4} sx={{ alignItems: "center" }}>
                        <Grid item sx={{ display: { lg: "block", xs: "none" } }} xs={12} sm={12} md={5} lg={5} >
                            <img src={doctor} style={{ width: "100%", marginTop: -85 }} alt="" />
                        </Grid>
                        <Grid item xs={12} sm={12} md={7} lg={7} >
                            <Typography variant='h6' color="#1CC7C1" sx={{ fontWeight: "500" }}>Appointment</Typography>
                            <Typography color="#fff" variant="h3">Make an appoinment <br /> Today</Typography>
                            <Box>
                                <Typography sx={{ my: 4, color: "#fff" }} variant="body1">It is a long established fact that a reader will be distracted
                                    by the readable content of a page when looking at its</Typography>
                                <MuiButton>Learn More</MuiButton>
                            </Box>
                        </Grid>
                    </Grid>
                </Container >
            </div>
        </div>
    );
};

export default Appointment;