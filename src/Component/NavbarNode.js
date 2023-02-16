import { AppContext } from '../App';
import { useContext } from 'react';

const NavbarNode = ({ className, icon, onClick }) => {
    const { FontAwesomeIcon } = useContext(AppContext);
    return (
        <button onClick={onClick}>
            <FontAwesomeIcon
                icon={icon}
                className={className}
            />
        </button>
    )
}
export default NavbarNode;