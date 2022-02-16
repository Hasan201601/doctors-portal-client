import { Box, Container, TextField, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import contactBg from "../images/appointment-bg.png"
import MuiButton from '../StyledComponents/MuiButton';




const useStyle = makeStyles({
    root: {

        height: 600,
        backgroundImage: `url(${contactBg})`,
        objectFit: "cover",
        backgroundPosition: "center",
        position: "relative",
        marginTop: "100px",
    },
    bg: {
        backgroundColor: "#3a4256dc",
        height: 600,
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

        height: 600,
        display: "flex",
        alignItems: 'center',
        justifyContent: "center"

    },
})
const Contact = () => {
    const { root, bg, child } = useStyle()
    return (
        <div className={root}>
            <div className={bg}></div>
            <div className={child}>
                <Container maxWidth="md">
                    <Box sx={{ textAlign: "center", my: 4 }}>
                        <Typography sx={{ textTransform: "uppercase", color: "#1CC7C1" }} variant='h6'>Contact Us</Typography>
                        <Typography color="#3A4256" variant="h4" sx={{ my: 1, color: "white" }}>Always Connect With Us</Typography>
                    </Box>
                    <form>
                        <TextField placeholder='Enter your Name' type="text" fullWidth sx={{ backgroundColor: "#fff", borderRadius: 1 }} />
                        <TextField placeholder='Enter your Email' type="email" required fullWidth sx={{ backgroundColor: "#fff", my: 2, borderRadius: 1 }} />
                        <TextField placeholder='Write Your Message' type="text" rows={4} multiline fullWidth sx={{ backgroundColor: "#fff", borderRadius: 1 }} />
                        <Box sx={{ textAlign: "center", mt: 3 }}>
                            <MuiButton>SUBMIT</MuiButton>
                        </Box>
                    </form>
                </Container>
            </div>
        </div>
    );
};

export default Contact;