import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { Container } from '@mui/material';
const ulStyle = {
    display: "flex",
    justifyContent: "flex-end",
    listStyle: "none",
    color: "gray",
    marginRight: "4vw"
}
const liStyle = {
    marginRight: "3vw",
    fontSize: "17px",
    cursor: "pointer",
    textDecoration: "none",
    color: "inherit"

}

export default function Header() {
    return (
        <Box sx={{ position: "absolute", top: 10, right: 0, zIndex: 4 }}>
            <Container>
                <ul style={ulStyle}>
                    <Link style={liStyle} to="/home"><li >Home</li></Link>
                    <Link style={liStyle} to="/about"><li >About</li></Link>
                    <Link style={liStyle} to="/reservations"><li >Reservations</li></Link>
                    <Link style={liStyle} to="/"><li >Blogs</li></Link>
                    <Link style={liStyle} to="/"><li >Login</li></Link>
                    <Link style={liStyle} to="/"><li >Register</li></Link>
                    <Link style={liStyle} to="/dashboard"><li >Dashboard</li></Link>
                </ul>
            </Container>
        </Box>
    );
}