import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import { faCheck } from "@fortawesome/free-solid-svg-icons";
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
                <div className="day-name" >
                    {dayName}
                </div>
                <div className="day-number" >
                    {dayNumber}
                </div>
                <div className="month-name">
                    {monthName}
                </div>
                <div className="year">
                    {year}
                </div>
            </div>

            <div className="progress">
                <p className="progress-text">Progress Today <span className="fraction">0/3</span></p>
                <div className="progress-container">
                    <div className="progress-bar"></div>
                </div>
            </div>

            <div className='choose-person-container'>

                <input itemType='text' className='add-name' placeholder='Choose the dedicated person..' />

                <button itemType='submit' className='submit-name-button'>
                    <FontAwesomeIcon icon={faCheck} className='submit-name-icon' />
                </button>

                <select name="people" className="people">
                    <option value="Mom">Mom</option>
                    <option value="Dad">Dad</option>
                    <option value="Brother">Brother</option>
                    <option value="Best Friend">Best Friend</option>
                </select>


            </div>

            <input itemType='text' className='write-sentence' placeholder='Explain why you are grateful for this specific person..' maxLength={100} />
            <button itemType='submit' className='submit-sentence-button'>
                <FontAwesomeIcon icon={faPaperPlane} className='submit-sentence-icon' />
            </button>
        </section>
    );
}

export default BegForm;
