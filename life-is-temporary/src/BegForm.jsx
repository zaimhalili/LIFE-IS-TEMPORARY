import React from 'react';

//Beginning of Form
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

            <div className='choose-person-container'>

                <input itemType='text' id='add-name' placeholder='Choose the dedicated person..'/>

                <button itemType='submit' className='submit-name-button'>
                    Add Name
                </button>

                <select name="people" className="people">
                    <option value="Mom">Mom</option>
                    <option value="Dad">Dad</option>
                    <option value="Brother">Brother</option>
                    <option value="Best Friend">Best Friend</option>
                </select>

                
            </div>
            <input itemType='text' id='write-sentence' placeholder='Explain why you are grateful for this specific person..' maxLength={100}/>
        </section>
    );
}

export default BegForm;
