import React,{useState} from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const MyDatePicker=()=>{
    const[selectedDate, setselecteddate]=useState(null);
    const handleDateChange=(date) =>{
        setselecteddate(date);
    };
    return(
        <div>
            <h2>selectedDate:</h2>
            <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            dateFormat="dd/MM/yyyy"
            />
        </div>
    );
};

export default MyDatePicker;