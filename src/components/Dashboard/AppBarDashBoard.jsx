import { IconButton, Toolbar, AppBar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react';

const AppBarDashBoard = ({ drawerWidth, handleDrawerToggle }) => {
    return (
        <AppBar
            position="fixed"
            elevation={0}
            sx={{
                width: { md: `calc(100% - ${drawerWidth}px)` },
                ml: { md: `${drawerWidth}px` },
                backgroundColor: 'transparent',
            }}
        >
            <Toolbar >
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{ mr: 2, display: { xs: "block", md: 'none' } }}
                >
                    <MenuIcon sx={{ fontSize: "24px", color: "#19D3AE" }} />
                </IconButton>

            </Toolbar>
        </AppBar>
    );

};

export default AppBarDashBoard;