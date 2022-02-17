import { Button, Container, Grid, IconButton, List, ListItemText, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import GoogleIcon from '@mui/icons-material/Google';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import MuiButton from '../../StyledComponents/MuiButton';
import footerBg from "../../images/footer-bg.png"
const useStyle = makeStyles({
    socialIcon: {
        color: "#19D3AE !important",
        border: "1px solid #19D3AE !important",
        margin: "20px 10px 30px 0 !important",
        "&:hover": {
            background: "#19D3AE !important",
            color: "#fff !important"
        }
    }
})

const Footer = () => {
    const { socialIcon } = useStyle()
    return (
        <footer style={{ backgroundImage: `url(${footerBg})`, objectFit: "contain", backgroundPosition: "center" }}>
            <Container>
                <Grid container spacing={3} sx={{ my: 3, color: "gray" }}>
                    <Grid item xs={12} sm={12} md={6} lg={3}>
                        <List sx={{ mt: 4 }}>
                            <ListItemText sx={{ mt: 4 }}>Emergency Dental Care</ListItemText>
                            <ListItemText>Check Up</ListItemText>
                            <ListItemText>Treatment of Personal Diseases</ListItemText>
                            <ListItemText>Tooth Extraction</ListItemText>
                            <ListItemText>Check Up</ListItemText>
                        </List>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={3}>
                        <List sx={{ mt: 4 }}>
                            <ListItemText sx={{ color: "#19D3AE", mb: 1 }}>Services</ListItemText>
                            <ListItemText>Emergency Dental Care</ListItemText>
                            <ListItemText>Check Up</ListItemText>
                            <ListItemText>Treatment of Personal Diseases</ListItemText>
                            <ListItemText>Tooth Extraction</ListItemText>
                            <ListItemText>Check Up</ListItemText>
                            <ListItemText>Check Up</ListItemText>
                            <ListItemText>Check Up</ListItemText>
                        </List>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={3}>
                        <List sx={{ mt: 4 }}>
                            <ListItemText sx={{ color: "#19D3AE", mb: 1, fontWeight: "bold" }}>Oral Care</ListItemText>
                            <ListItemText>Emergency Dental Care</ListItemText>
                            <ListItemText>Check Up</ListItemText>
                            <ListItemText>Treatment of Personal Diseases</ListItemText>
                            <ListItemText>Tooth Extraction</ListItemText>
                            <ListItemText>Check Up</ListItemText>
                            <ListItemText>Check Up</ListItemText>
                            <ListItemText>Check Up</ListItemText>
                        </List>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={3}>
                        <List sx={{ mt: 4 }}>
                            <ListItemText sx={{ color: "#19D3AE", mb: 1 }}>Our Address</ListItemText>
                            <ListItemText>New York - 101010 Hudson</ListItemText>
                            <ListItemText>Yards</ListItemText>
                            <IconButton className={socialIcon}>
                                <GoogleIcon />
                            </IconButton>
                            <IconButton className={socialIcon}>
                                <InstagramIcon />
                            </IconButton>
                            <IconButton className={socialIcon}>
                                <TwitterIcon />
                            </IconButton>
                            <Typography>Call Now</Typography>
                            <MuiButton variant="contained">+8065432145</MuiButton>
                        </List>
                    </Grid>
                </Grid>
                <Typography variant="subtitle2" sx={{ textAlign: "center", pt: 4 }}>Copyright &copy; 2022 ALL RIGHTS RESERVED</Typography>
            </Container>
        </footer>
    );
};

export default Footer;