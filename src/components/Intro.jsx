
import React from 'react';
import Chair from "../images/chair.png";
import bg from "../images/bg.png"
import { Grid, Typography } from '@mui/material';
import MuiButton from '../StyledComponents/MuiButton';
import MuiContainer from '../StyledComponents/MuiContainer';

const intro = {
    minHeight: 500,
    height: "100vh",
    display: "flex",
    alignItems: "center",
    background: `url(${bg}) no-repeat`,
    objectFit: "cover",
    position: "relative",

}
const vertical = {
    position: "absolute",
    top: "0px",
    bottom: "0px",
    right: "0",
    width: "35%",
    height: "100%",
    backgroundColor: "#3A4256",
    zIndex: "1"
}

const Intro = () => {

    return (
        <div style={intro}>

            <div style={vertical}></div>
            <MuiContainer>
                <Grid container spacing={2} sx={{ alignItems: "center" }} >
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <Typography variant="h4"
                            sx={{ fontWeight: 600 }}>
                            Your New Smile <br />
                            Starts Here
                        </Typography>
                        <Typography sx={{ lineHeight: 2, my: 3 }} variant="body1">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga nostrum, totam numquam necessitatibus ab ut cupiditate? Explicabo ex, laboriosam in, dignissimos tenetur nam quaerat placeat consectetur obcaecati quasi sunt culpa!
                        </Typography>
                        <MuiButton>GET APPOINTMENT</MuiButton>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <img src={Chair} alt="" width="100%" />
                    </Grid>
                </Grid>
            </MuiContainer>
        </div>
    );
};

export default Intro;