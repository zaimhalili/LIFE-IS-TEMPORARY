import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';

function Header() {
    return (
        <header className="nav-bar">
            <h1 className="title">
                <a href="life-is-temporary\index.html" className="title-link">LIFE IS TEMPORARY</a>
            </h1>

            <ul className="aboutList">
                <li>
                    <a href="life-is-temporary\index.html" className="home">Home</a></li>
                <li>
                    <a href="#" className="about">About</a></li>
                <li>
                    <a href="#" className="contact">Contact</a></li>
                <li>
                    <a href="../login.html">
                        <FontAwesomeIcon icon={faUser} className='user-icon' />
                    </a>
                </li>
                {/*<li>
                    <input type="checkbox" className="input" id="dark-mode" />
                    <label htmlFor="dark-mode" className="label">
                        <div className="circle"></div>
                    </label>
                </li>*/}
            </ul>
        </header>
    )
}

export default Header