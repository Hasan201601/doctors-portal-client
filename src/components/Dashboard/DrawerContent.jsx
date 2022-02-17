import { Avatar, Divider, List, ListItem, Typography, } from "@mui/material";
import { Link } from "react-router-dom";

import React from 'react';
import { useRouteMatch } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import ExitToAppRoundedIcon from '@mui/icons-material/ExitToAppRounded';
import { useHistory } from "react-router-dom";
import DashboardSharpIcon from '@mui/icons-material/DashboardSharp';
import EventSharpIcon from '@mui/icons-material/EventSharp';
import PeopleSharpIcon from '@mui/icons-material/PeopleSharp';
import DescriptionSharpIcon from '@mui/icons-material/DescriptionSharp';
import LogoutSharpIcon from '@mui/icons-material/LogoutSharp';
import { Box } from "@mui/system";
import { Home } from "@mui/icons-material";
import person1 from "../../images/people-1.png"


const useStyles = makeStyles({
    link: {
        textDecoration: "none",
        display: "flex",
        alignItems: "center",
        padding: "5px 20px",
        fontWeight: 500,
        fontSize: "16px",
        color: "white",
    },
    logout: {
        display: "flex",
        padding: "5px 30px",
    }
})

const DrawerContent = () => {
    const classes = useStyles()
    let { url } = useRouteMatch();
    const history = useHistory()
    return (
        <div style={{ height: "100%", padding: "15px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <Box>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: "center" }}>
                    <Avatar alt="Travis Howard" src={person1} />
                    <Typography variant="h6" sx={{ fontSize: "16px", color: 'white', ml: 1 }}>
                        Welcome <br />Hasan
                    </Typography>
                </Box>
                <Typography variant="h6" sx={{ textAlign: 'left', mx: 2, pt: 2 }}>

                </Typography>
                <List>
                    <Link className={classes.link} to={`${url}`}>
                        <DashboardSharpIcon />
                        <ListItem button >
                            Dashboard
                        </ListItem>
                    </Link>
                    <Link className={classes.link} to={`${url}/login`}>
                        <EventSharpIcon />
                        <ListItem button >
                            Appointments
                        </ListItem>
                    </Link>
                    <Link className={classes.link} to={`${url}/register`}>
                        <PeopleSharpIcon />
                        <ListItem button >
                            Patients
                        </ListItem>
                    </Link>
                    <Link className={classes.link} to={`${url}/register`}>
                        <DescriptionSharpIcon />
                        <ListItem button >
                            Prescriptions
                        </ListItem>
                    </Link>
                    <Link className={classes.link} to={`${url}/register`}>
                        <Home />
                        <ListItem button >
                            Homepage
                        </ListItem>
                    </Link>
                    {/* {
                    role === "lender" ? <>
                        <Link className={classes.link} to={`${url}/loans`}>
                            <ListItem button >
                                Loan Requests
                            </ListItem>
                        </Link>
                        <Divider />
                    </> : role === "user" ? <>
                        <Link className={classes.link} to={`${url}/myRequests`}>
                            <ListItem button >
                                My Loan Requests
                            </ListItem>
                        </Link>
                        <Divider />
                    </> : null
                }
                {
                    user.username && <>
                        <ListItem button className={classes.logout} onClick={handleLogout}>
                            <ExitToAppRoundedIcon></ExitToAppRoundedIcon>
                            <Typography>Logout</Typography>
                        </ListItem>
                        <Divider />
                    </>
                } */}
                </List>
            </Box>
            <Box>
                <List>
                    <Link className={classes.link} to={`${url}`}>
                        <LogoutSharpIcon />
                        <ListItem button >
                            LogOut
                        </ListItem>
                    </Link>
                </List>
            </Box>

        </div >
    );
};

export default DrawerContent;
