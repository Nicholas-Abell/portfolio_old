import './Navbar.scss';
import NavbarNode from './NavbarNode';
import { faCodepen } from '@fortawesome/free-brands-svg-icons';
// import { } from '@fortawesome/free-regular-svg-icons';
import { faHouse, faUser, faCode, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    return (
        <nav className="navbar">
            < NavbarNode icon={faHouse} />
            <div className="navbar__line"></div>
            < NavbarNode icon={faUser} />
            <div className="navbar__line"></div>
            <NavbarNode icon={faCode} />
            <div className="navbar__line"></div>
            <NavbarNode icon={faCodepen} />
            <div className="navbar__line"></div>
            <NavbarNode icon={faEnvelope} />
        </nav>
    );
}

export default Navbar;