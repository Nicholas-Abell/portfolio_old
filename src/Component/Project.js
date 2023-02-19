import React from 'react';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { useContext } from 'react';
import { AppContext } from '../App';

const Project = ({ title, description, image, switchSide }) => {

    const { FontAwesomeIcon } = useContext(AppContext);

    return (
        <div className="project">
            <h1 className='project__title'>{title}</h1>
            <div className='flex'
                style={switchSide ? { flexDirection: 'row-reverse' } : { flexDirection: 'row' }}>
                <div className="project__techStack">
                    <FontAwesomeIcon icon={faGithub} className="icon" />
                    <FontAwesomeIcon icon={faGithub} className="icon" />
                    <FontAwesomeIcon icon={faGithub} className="icon" />
                    <FontAwesomeIcon icon={faGithub} className="icon" />
                </div>
                <div
                    className="project__img"
                    style={{
                        backgroundImage: `url(${image})`,
                        backgroundPosition: 'center',
                        backgroundOrigin: 'center',
                        backgroundSize: 'cover',
                    }}>
                    <div className='overlay'>
                        <p className='overlay__description'>{description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project;