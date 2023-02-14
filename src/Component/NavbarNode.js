import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavbarNode = ({ icon }) => {

    let sectionInView = false;
    return (
        <button>
            <FontAwesomeIcon
                icon={icon}
                className={
                    !sectionInView
                        ? 'navbar__icon'
                        : 'navbar__icon--active'} />
            {/* <i className="navbar__icon navbar__icon--active fa fa-home" id="home-btn" aria-hidden="true"></i> */}
        </button>
    )
}
//onClick="scrollToElementCentered('.title-card-home')"
export default NavbarNode;