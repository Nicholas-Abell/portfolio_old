import { AppContext } from '../App';
import { useContext } from 'react';

const NavbarNode = ({ className, icon }) => {
    const { FontAwesomeIcon } = useContext(AppContext);
    return (
        <button>
            <FontAwesomeIcon
                icon={icon}
                className={className} />
        </button>
    )
}
export default NavbarNode;