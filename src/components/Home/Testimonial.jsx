import { Container, Grid, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { testimonialData } from '../../Data/Data';

const Testimonial = () => {
    return (
        <Container sx={{ my: 5 }}>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Box>
                    <Typography sx={{ color: "#1CC7C1", fontWeight: "bold", textTransform: "uppercase" }} variant="h6">Testimonial</Typography>
                    <Typography sx={{ color: "#3A4256", fontWeight: "bold" }} variant="h3">What's Our Patients <br /> Says</Typography>
                </Box>
                <Box>
                    <svg fill="#89dfc8a9" xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
                </Box>
            </Box>
            <Grid container spacing={3} sx={{ my: 3, pb: 3 }}>
                {
                    testimonialData.map(({ image, name, state, review, background }, index) => <Grid key={index} item xs={12} sm={12} md={4} lg={4} >
                        <Paper elevation={3} sx={{ p: 3 }}>
                            <Typography sx={{ textAlign: "justify", color: "#3A4256" }} variant="body1">{review}</Typography>
                            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", background: background, p: 3 }}>
                                <Box>
                                    <img src={image} alt="" />
                                </Box>
                                <Box>
                                    <Typography sx={{ fontWeight: "bold", color: "#1CC7C1" }} variant="subtitle1">{name}</Typography>
                                    <Typography color="#3a4256bb" variant="subtitle1">{state}</Typography>
                                </Box>
                            </Box>

                        </Paper>
                    </Grid>)
                }
            </Grid>
        </Container>
    );
};

export default Testimonial;