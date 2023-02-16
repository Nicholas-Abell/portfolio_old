import './Navbar.scss';
import NavbarNode from './NavbarNode';
import { faCodepen } from '@fortawesome/free-brands-svg-icons';
import { faHouse, faUser, faCode, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import * as Scroll from 'react-scroll';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


const Navbar = ({ headerInView, aboutMeInView, projectsInView, contactInView, skillsInView }) => {

    const scrollToElement = (target) => {
        scroller.scrollTo(target, {
            duration: 800,
            smooth: true,
            // behavior: 'smooth',
            // block: 'center',
            // inline: 'center'
            // offset: 50, // Scrolls to element + 50 pixels down the page
        })
    }

    const scrollToTop = () => {
        scroll.scrollToTop();
    }

    const scrollToBottom = () => {
        scroll.scrollToBottom();
    }

    return (
        <nav className="navbar">
            < NavbarNode
                icon={faHouse}
                className={!headerInView ? 'navbar__icon' : 'navbar__icon--active'}
                onClick={scrollToTop} />
            <div className="navbar__line"></div>
            < NavbarNode
                icon={faUser}
                className={!aboutMeInView ? 'navbar__icon' : 'navbar__icon--active'}
                onClick={() => scrollToElement('aboutMeScroll')} />
            <div className="navbar__line"></div>
            <NavbarNode
                icon={faCode}
                className={!skillsInView ? 'navbar__icon' : 'navbar__icon--active'}
                onClick={() => scrollToElement('skillsScroll')} />
            <div className="navbar__line"></div>
            <NavbarNode
                icon={faCodepen}
                className={!projectsInView ? 'navbar__icon' : 'navbar__icon--active'}
                onClick={() => scrollToElement('projectsScroll')} />
            <div className="navbar__line"></div>
            <NavbarNode
                icon={faEnvelope}
                className={!contactInView ? 'navbar__icon' : 'navbar__icon--active'}
                onClick={scrollToBottom} />
        </nav>
    );
}

export default Navbar;