import React from 'react';

function Calendar() {
    const date = new Date();

    const monthName = date.toLocaleString('en', { month: 'long' });
    const dayName = date.toLocaleString('en', { weekday: 'long' });
    const dayNumber = date.getDate();
    const year = date.getFullYear();

    return (
        <div className="calendar-container">
            <div id="day-name" >
                {dayName}
            </div>
            <div id="day-number" >
                {dayNumber}
            </div>
            <div id="month-name">
                {monthName}
            </div>
            <div id="year">
                {year}
            </div>
        </div>
    );
}

export default Calendar;
