import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Skill = ({ icon, title }) => {
    return (
        <div className='card'>
            <FontAwesomeIcon icon={icon} className="icon card__icon" />
            <p className='card__title'>{title}</p>
        </div>
    )
}

export default Skill;