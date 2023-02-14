import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavbarNode = ({ icon }) => {
    return (
        <button onclick="scrollToElementCentered('.title-card-home')">
            <FontAwesomeIcon icon={icon} className='navbar__icon' />
            {/* navbar__icon--active */}
            {/* <i className="navbar__icon navbar__icon--active fa fa-home" id="home-btn" aria-hidden="true"></i> */}
        </button>
    )
}

export default NavbarNode;