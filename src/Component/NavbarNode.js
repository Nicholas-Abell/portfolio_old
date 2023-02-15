import { AppContext } from '../App';
import { useContext } from 'react';

const NavbarNode = ({ className, icon }) => {
    const { FontAwesomeIcon, navView } = useContext(AppContext);
    let sectionInView = false;
    return (
        <button>
            <FontAwesomeIcon
                icon={icon}
                className={className} />
            {/* <i className="navbar__icon navbar__icon--active fa fa-home" id="home-btn" aria-hidden="true"></i> */}
        </button>
    )
}
//onClick="scrollToElementCentered('.title-card-home')"
export default NavbarNode;