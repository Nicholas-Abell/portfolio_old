import { createContext, useContext, useEffect } from 'react';
import './Navbar.scss';
import NavbarNode from './NavbarNode';
import { faCodepen } from '@fortawesome/free-brands-svg-icons';
import { faHouse, faUser, faCode, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { AppContext } from '../App';

const Navbar = () => {
    const { navView, setNavView } = useContext(AppContext);

    useEffect(() => {
        if (navView.header) {
            console.log('true', navView);
        } else { console.log('false', navView) }
    }, [])

    return (
        <nav className="navbar">
            < NavbarNode icon={faHouse} className={!navView.header ? 'navbar__icon' : 'navbar__icon--active'} />
            <div className="navbar__line"></div>
            < NavbarNode icon={faUser} className={!navView.aboutMe ? 'navbar__icon' : 'navbar__icon--active'} />
            <div className="navbar__line"></div>
            <NavbarNode icon={faCode} className={!navView.skills ? 'navbar__icon' : 'navbar__icon--active'} />
            <div className="navbar__line"></div>
            <NavbarNode icon={faCodepen} className={!navView.projects ? 'navbar__icon' : 'navbar__icon--active'} />
            <div className="navbar__line"></div>
            <NavbarNode icon={faEnvelope} className={!navView.contact ? 'navbar__icon' : 'navbar__icon--active'} />
        </nav>
    );
}

export default Navbar;