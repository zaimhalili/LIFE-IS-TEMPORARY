import React from 'react';

function BegForm() {
    const date = new Date();

    const monthName = date.toLocaleString('en', { month: 'long' });
    const dayName = date.toLocaleString('en', { weekday: 'long' });
    const dayNumber = date.getDate();
    const year = date.getFullYear();

    return (
        <section className='beg-form'>
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

            <div className="progress">
                <p className="progress-text">Progress Today <div className="fraction">0/3</div></p>
                <div className="progress-container">
                    <div className="progress-bar"></div>
                </div>
            </div>
        </section>
    );
}

export default BegForm;
