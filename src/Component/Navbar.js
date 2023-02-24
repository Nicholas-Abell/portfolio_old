import '../styles/Navbar.scss';
import NavbarNode from './NavbarNode';
import { faCodepen } from '@fortawesome/free-brands-svg-icons';
import { faHouse, faUser, faCode, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { animateScroll as scroll, scroller } from 'react-scroll'


const Navbar = ({ headerInView, aboutMeInView, projectsInView, contactInView, skillsInView }) => {

    const scrollToElement = (target) => {
        scroller.scrollTo(target, {
            duration: 800,
            smooth: true,
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
                onClick={() => scrollToElement('contactScroll')} />
        </nav>
    );
}

export default Navbar;