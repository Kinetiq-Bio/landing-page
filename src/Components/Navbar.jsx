import "./Navbar.css";
import logo from './logo.png'

function Navbar() {
    return (
        <nav className = 'navbar'>
            <figure className = 'figure'>
                <img src = {logo} alt = 'Company Logo' className = 'logo'></img>
                <figcaption className = 'caption'>KinetiQ</figcaption>
            </figure>
            <ul className = 'navLinks'>
                <li>About</li>
                <li>Join us</li>
                <li>Our Product</li>
            </ul>
        </nav>
    );
}

export default Navbar;