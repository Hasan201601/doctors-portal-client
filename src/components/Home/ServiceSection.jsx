import { Container, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import { serviceData } from '../../Data/Data';

const ServiceSection = () => {
    return (
        <div style={{ textAlign: "center", margin: "60px 0" }}>
            <Typography color="#1CC7C1" variant='h6'>Our Services</Typography>
            <Typography color="#3A4256" variant="h4" sx={{ fontWeight: 'bold', my: 3, pb: 4 }}>Services We Provide</Typography>
            <div style={{}}>
                <Container >
                    <Grid container spacing={2}>
                        {
                            serviceData.map(({ Icon, title, description }, index) => <Grid key={index} item xs={12} sm={12} md={4} lg={4} >
                                <Paper elevation={0} sx={{ p: 4 }}>
                                    <img src={Icon} alt="" />
                                    <div>
                                        <Typography sx={{ fontWeight: "bold", my: 3 }} variant="h6" color="#3A4256" >{title}</Typography>
                                        <Typography color="gray" variant="body1">{description}</Typography>
                                    </div>
                                </Paper>
                            </Grid>)
                        }
                    </Grid>
                </Container>
            </div>
        </div>
    );
};

export default ServiceSection;