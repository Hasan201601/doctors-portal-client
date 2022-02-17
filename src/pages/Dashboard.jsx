import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { CssBaseline } from '@mui/material';
import Drawers from '../components/Dashboard/Drawers';
import Contents from '../components/Dashboard/Contents';
import AppBarDashBoard from '../components/Dashboard/AppBarDashBoard';

const drawerWidth = 270;

function Dashboard(props) {

    const { window } = props;
    const [mobileOpen, setMobileOpen] = useState(false);
    console.log(mobileOpen)

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBarDashBoard
                drawerWidth={drawerWidth}
                handleDrawerToggle={handleDrawerToggle}
            ></AppBarDashBoard>
            <Drawers
                drawerWidth={drawerWidth}
                container={container}
                mobileOpen={mobileOpen}
                handleDrawerToggle={handleDrawerToggle}
            ></Drawers>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { md: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Contents></Contents>
            </Box>
        </Box >
    );
}


export default Dashboard;