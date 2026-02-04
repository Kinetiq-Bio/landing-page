import "./Navbar.css";
import logo from './KinetiQ Logo.svg'

function Navbar() {
    return (
        <nav className = 'navbar'>
            <figure className = 'figure'>
                <img src = {logo} alt = 'Company Logo' className = 'logo'></img>
            </figure>
            <ul className = 'navLinks'>
                <li>About</li>
                <li>Join us</li>
                <li>Our Product</li>
                <button className = 'kq-btn-outline' onClick={() => {window.location.href = "https://app.kinetiq.com";}}>
                Login
                </button>
            </ul>
        </nav>
    );
}

export default Navbar;