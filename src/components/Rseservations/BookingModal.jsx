import { Box, Button, Dialog, DialogContent, DialogTitle, Fade, FormControl, InputLabel, OutlinedInput, Select, TextField, Typography } from '@mui/material';
import React from 'react';
import MuiButton from '../../StyledComponents/MuiButton';



const BookingModal = ({ fullScreen, openBooking, handleBookingClose, date, service }) => {
    const [time, setAge] = React.useState('Select Time');

    const handleChange = (event) => {
        setAge(Number(event.target.value) || 'Select Time');
    };

    const handleBookingSubmit = e => {
        alert('submitting');

        // collect data
        // send to the server

        handleBookingClose();
        e.preventDefault();
    }
    return (
        <Dialog
            fullScreen={fullScreen}
            open={openBooking}
            onClose={handleBookingClose}
            closeAfterTransition
            aria-labelledby="responsive-dialog-title"
        >
            <Box sx={{ p: 4, textAlign: "center" }}>
                <DialogTitle color='#19D3AE' >
                    {service}
                </DialogTitle>
                <DialogContent >
                    <Typography id="transition-modal-title" variant="h6" component="h2">

                    </Typography>

                    <form onSubmit={handleBookingSubmit}>
                        <FormControl sx={{ my: 1, width: "100%", }}>
                            <InputLabel htmlFor="demo-dialog-native">Select Time</InputLabel>
                            <Select
                                native
                                value={time}
                                onChange={handleChange}
                                input={<OutlinedInput label="Age" id="demo-dialog-native" />}
                            >
                                <option aria-label="None" value="" />
                                <option value={10}>Ten</option>
                                <option value={20}>Twenty</option>
                                <option value={30}>Thirty</option>
                            </Select>
                        </FormControl>
                        <TextField
                            sx={{ width: '100%', my: 1 }}
                            id="outlined-size-small"
                            defaultValue="Your Name"
                            size="small"
                        />
                        <TextField
                            sx={{ width: '100%', my: 1 }}
                            id="outlined-size-small"
                            defaultValue="Your Email"
                            size="small"
                        />
                        <TextField
                            sx={{ width: '100%', my: 1 }}
                            id="outlined-size-small"
                            defaultValue="Phone Number"
                            size="small"
                        />
                        <TextField
                            disabled
                            sx={{ width: '100%', my: 1 }}
                            id="outlined-size-small"
                            defaultValue={date.toDateString()}
                            size="small"
                        />
                        <Box sx={{ textAlign: "right", width: "100%", p: 0, m: 0 }}>
                            <MuiButton autoFocus type="submit" sx={{ padding: "8px 45px" }} variant="contained">SEND</MuiButton>
                        </Box>

                    </form>
                </DialogContent>
            </Box>
        </Dialog>
    );
};

export default BookingModal;