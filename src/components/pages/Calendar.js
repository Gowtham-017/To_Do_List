import React, { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import Home from "./Home";
import "../styles/Calendar.css";
export default function BasicDateCalendar() {
    const [showHome, setShowHome] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const handleHome = () => {
        setShowHome(true);
    };

    return (
        <div>
        {!showHome && (
            <div onClick={handleHome}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateCalendar
                className="calendar"
                onChange={(date) => handleDateChange(date)}
                />
            </LocalizationProvider>
            </div>
        )}
        {showHome && <Home selectedDate={selectedDate} />}
        </div>
    );
}