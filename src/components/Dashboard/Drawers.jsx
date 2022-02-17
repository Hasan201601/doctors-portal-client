import { Drawer } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import DrawerContent from './DrawerContent';

const Drawers = ({ drawerWidth, container, mobileOpen, handleDrawerToggle }) => {
    return (
        <Box
            component="nav"
            sx={{
                width: { md: drawerWidth }, flexShrink: { sm: 0 }
            }}
            aria-label="mailbox folders"
        >
            {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
            <Drawer
                container={container}
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                    display: { xs: 'block', md: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, padding: "20px", background: 'linear-gradient(180deg,#19D3AE,#0FCFEC)' },
                }}
            >
                <DrawerContent></DrawerContent>
            </Drawer>
            <Drawer
                variant="permanent"
                sx={{
                    display: { xs: 'none', md: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, padding: "20px", background: 'linear-gradient(180deg,#19D3AE,#0FCFEC)' },
                }}
                open
            >
                <DrawerContent></DrawerContent>
            </Drawer>
        </Box>
    );
};

export default Drawers;