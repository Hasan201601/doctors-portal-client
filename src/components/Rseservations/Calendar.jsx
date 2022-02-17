
import * as React from 'react';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import CalendarPicker from '@mui/lab/CalendarPicker';
import Grid from '@mui/material/Grid';
import { ThemeProvider, createTheme, experimental_sx as sx } from '@mui/material/styles';
import { styled } from '@mui/material/styles';

const CustomCalendarPicker = styled(CalendarPicker)({
    maxWidth: "400px",
    backgroundColor: "#fff",
    "& .MuiPickersDay-today": {
        border: "1px solid #19D3AE"
    },
    "& .MuiPickersDay-root": {
        borderRadius: 5,
        [`&.Mui-selected, &.Mui-active`]: {
            backgroundColor: `#19D3AE`
        }
    }
})

export default function Calendar({ date, setDate }) {

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <CustomCalendarPicker sx={{ "&:MuiPickersDay-root.Mui-selected": { color: "red" } }} date={date} onChange={(newDate) => setDate(newDate)} />
        </LocalizationProvider>
    );
}