import { Container, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import { infoData } from '../../Data/Data';

const InfoCard = () => {
    return (
        <Container sx={{ marginTop: "-80px", zIndex: "3", position: "relative" }}>
            <Grid container spacing={3}>
                {
                    infoData.map(({ Icon, title, description, background }, index) => <Grid key={index} item xs={12} sm={12} md={4} lg={4} >
                        <Paper variant="outlined" sx={{ display: "flex", justifyContent: "space-around", alignItems: "center", background: background, color: "#fff", p: 3 }}>
                            <Icon sx={{ fontSize: 60 }} />
                            <div>
                                <Typography sx={{ fontWeight: "bold" }} variant="body1">{title}</Typography>
                                <Typography variant="caption">{description}</Typography>
                            </div>
                        </Paper>
                    </Grid>)
                }
            </Grid>
        </Container>
    );
};

export default InfoCard;