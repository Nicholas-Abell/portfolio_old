import { useContext } from 'react';
import './Navbar.scss';
import NavbarNode from './NavbarNode';
import { faCodepen } from '@fortawesome/free-brands-svg-icons';
import { faHouse, faUser, faCode, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { AppContext } from '../App';

const Navbar = ({ headerInView, aboutMeInView, projectsInView, contactInView, skillsInView }) => {
    return (
        <nav className="navbar">
            < NavbarNode icon={faHouse} className={!headerInView ? 'navbar__icon' : 'navbar__icon--active'} />
            <div className="navbar__line"></div>
            < NavbarNode icon={faUser} className={!aboutMeInView ? 'navbar__icon' : 'navbar__icon--active'} />
            <div className="navbar__line"></div>
            <NavbarNode icon={faCode} className={!skillsInView ? 'navbar__icon' : 'navbar__icon--active'} />
            <div className="navbar__line"></div>
            <NavbarNode icon={faCodepen} className={!projectsInView ? 'navbar__icon' : 'navbar__icon--active'} />
            <div className="navbar__line"></div>
            <NavbarNode icon={faEnvelope} className={!contactInView ? 'navbar__icon' : 'navbar__icon--active'} />
        </nav>
    );
}

export default Navbar;