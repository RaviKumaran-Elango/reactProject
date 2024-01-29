import * as React from 'react';
import dayjs from 'dayjs';
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

export default function ResponsiveTimePickers(){
    return(
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <MobileTimePicker defaultValue={dayjs('2024-04-17T21.50')}/>
        </LocalizationProvider>
    )
}