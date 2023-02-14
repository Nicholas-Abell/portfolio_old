import Skills from "./Skills";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Skill = ({ skillName, icon }) => {
    return (
        <div className="skill">
            <div className="skill__title-card slide-in from-left">
                <h1 className="skill__title">{skillName}</h1>
            </div>
            <div className="skill__icon-container i">
                <FontAwesomeIcon icon={icon} className='skill__icon' />
            </div>
        </div>
    )
}

export default Skill;