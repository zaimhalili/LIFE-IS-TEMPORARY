import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faLightbulb } from '@fortawesome/free-regular-svg-icons';

function Header() {
    return (
        <header className="nav-bar">
            <h1 className="title">
                <a href="/index.html" className="title-link">LIFE IS TEMPORARY</a>
            </h1>
            <ul className="aboutList">
                <li>
                    <a href="life-is-temporary/index.html" className="home">Home</a>
                </li>
                <li>
                    <a href="#" className="about">About</a>
                </li>
                <li>
                    {/* Hidden checkbox for toggle */}
                    <input type="checkbox" id="dark-toggle" className="dark-toggle-checkbox" hidden />
                    <label htmlFor="dark-toggle" className="dark-mode">
                        <FontAwesomeIcon icon={faLightbulb} className="lightbulb-icon" />
                    </label>
                </li>
                <li>
                    <a href="../login.html">
                        <FontAwesomeIcon icon={faUser} className='user-icon' />
                    </a>
                </li>
            </ul>
        </header>
    )
}

export default Header;