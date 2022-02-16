import { Container, Grid, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { blogData } from '../Data/Data';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
const paperStyle = {
    background: "linear-gradient(90deg,#19D3AE,#0FCFEC)",
    color: "#fff",
    height: "100%",
    position: "relative"
}

const BlogSection = () => {
    return (
        <Container sx={{ my: 5, py: 5 }}>
            <Box sx={{ textAlign: "center" }}>
                <Typography sx={{ textTransform: "uppercase", color: "#1CC7C1" }} variant='h6'>Our Blog</Typography>
                <Typography color="#3A4256" variant="h4" sx={{ fontWeight: 'bold', my: 3, pb: 4 }}>From Our Blog News</Typography>
            </Box>
            <Grid container spacing={3} sx={{ my: 3, pb: 3 }}>
                <Grid item xs={12} sm={12} md={4} lg={4}>

                    <Paper sx={paperStyle} >
                        <Box style={{ position: "absolute", top: 0, bottom: 0, right: 0, zIndex: 2 }}>
                            <svg fill="#89dfc8a9" xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
                        </Box>
                        <Box sx={{ position: "absolute", height: "100%", top: 0, left: 0, display: "flex", flexDirection: "column", zIndex: 3, p: 5, alignItems: "flex-start", justifyContent: "space-between" }}>
                            <Box>
                                <Typography sx={{ fontWeight: "bold", color: "#fff" }} variant="subtitle1"> {blogData[0].name} </Typography>
                                <Typography color="#fff" variant="subtitle1">22 August, 2019</Typography>
                            </Box>
                            <Typography color="white" variant="h5">CheckOut At Leat a Doctor in a year for your teeth</Typography>
                            <Box >
                                <ArrowRightAltIcon sx={{ fontSize: "30px", cursor: "pointer" }}></ArrowRightAltIcon>
                            </Box>
                        </Box>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={12} md={8} lg={8}>
                    <Grid container spacing={3}>
                        {
                            blogData.map(({ image, name, date, review, title }, index) => <Grid key={index} item xs={12} sm={12} md={6} lg={6} >
                                <Paper elevation={3} sx={{ p: 4, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-around" }}>
                                        <Box>
                                            <img src={image} width="100%" alt="" />
                                        </Box>
                                        <Box>
                                            <Typography sx={{ color: "#333", fontWeight: "bold" }} variant="h6">{name}</Typography>
                                            <Typography color="#3a4256bb" variant="subtitle1">{date}</Typography>
                                        </Box>
                                    </Box>
                                    <Typography sx={{ textAlign: "justify", color: "#3A4256", fontWeight: "bold", my: 2 }} variant="h6">{title}</Typography>
                                    <Typography sx={{ textAlign: "justify", color: "gray" }} variant="body1">{review}</Typography>


                                </Paper>
                            </Grid>)
                        }
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
};

export default BlogSection;