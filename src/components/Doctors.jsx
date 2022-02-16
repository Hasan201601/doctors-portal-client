import { Container, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import { doctorData } from '../Data/Data';
import PhoneIcon from '@mui/icons-material/Phone';
import { Box } from '@mui/system';

const Doctors = () => {

    return (
        <Container sx={{ textAlign: "center", mb: 5 }}>
            <Typography sx={{ textTransform: "uppercase", color: "#1CC7C1", mb: 5, fontWeight: "bold" }} variant='h6'>Our Doctors</Typography>
            <Grid container spacing={3}>
                {
                    doctorData.map(({ name, phone, image }, index) => <Grid key={index} item xs={12} sm={12} md={4} lg={4} >
                        <Box>
                            <img src={image} width="100%" alt="" />
                        </Box>
                        <Typography variant="h6" sx={{ fontWeight: "bold" }}>{name}</Typography>
                        <Box sx={{ display: "flex", alignItems: 'cneter', justifyContent: "center" }}>
                            <PhoneIcon sx={{ color: "#1CC7C1" }}></PhoneIcon>
                            <Typography color="gray" variant="caption">{phone}</Typography>
                        </Box>
                    </Grid>)
                }
            </Grid>
        </Container>
    );
};

export default Doctors;