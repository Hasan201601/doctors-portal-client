import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import treatment from "../images/treatment.png"
import MuiButton from '../StyledComponents/MuiButton';

const Treatment = () => {
    return (
        <Container>
            <Grid container spacing={4}>
                <Grid item xs={12} sm={12} md={5} lg={5} >
                    <img src={treatment} width="100%" alt="" />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} sx={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                    <Box>
                        <Typography variant='h3' color="#3A4256" sx={{ fontWeight: "500" }}>Exceptional Dental
                            <br />Care, on Your Terms</Typography>
                        <Typography sx={{ my: 5, py: 3, lineHeight: 2.2 }} color="gray" variant="body1">It is a long established fact that a reader will be distracted
                            by the readable content of a page when looking at its
                            layout. The point of using Lorem Ipsumis that it has
                            a more-or-less normal distribution of letters,as opposed
                            to using ‘Content here, content here’, making it look like
                            readable English. Many desktop publishing packages
                            and web page
                            layout.  </Typography>
                        <MuiButton>Learn More</MuiButton>
                    </Box>
                </Grid>
            </Grid>
        </Container >
    );
};

export default Treatment;