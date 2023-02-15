import { createContext, useContext, useEffect } from 'react';
import './Navbar.scss';
import NavbarNode from './NavbarNode';
import { faCodepen } from '@fortawesome/free-brands-svg-icons';
import { faHouse, faUser, faCode, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { AppContext } from '../App';

const Navbar = ({ headerInView, aboutMeInView }) => {
    const { navView, setNavView } = useContext(AppContext);

    return (
        <nav className="navbar">
            < NavbarNode icon={faHouse} className={!headerInView ? 'navbar__icon' : 'navbar__icon--active'} />
            <div className="navbar__line"></div>
            < NavbarNode icon={faUser} className={!aboutMeInView ? 'navbar__icon' : 'navbar__icon--active'} />
            <div className="navbar__line"></div>
            {/* <NavbarNode icon={faCode} className={!navView.skills ? 'navbar__icon' : 'navbar__icon--active'} />
            <div className="navbar__line"></div>
            <NavbarNode icon={faCodepen} className={!navView.projects ? 'navbar__icon' : 'navbar__icon--active'} />
            <div className="navbar__line"></div>
            <NavbarNode icon={faEnvelope} className={!navView.contact ? 'navbar__icon' : 'navbar__icon--active'} /> */}
        </nav>
    );
}

export default Navbar;