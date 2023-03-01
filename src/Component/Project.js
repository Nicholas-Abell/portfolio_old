import React from 'react';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faPager } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { AppContext } from '../App';

const Project = ({ title, description, image, switchSide, gitHubLink, livePageLink }) => {

    const { FontAwesomeIcon } = useContext(AppContext);

    //<FontAwesomeIcon icon="fa-solid fa-pager" />

    return (
        <div className="project">
            <h1 className='project__title'>{title}</h1>
            <div className='flex'
                style={switchSide ? { flexDirection: 'row-reverse' } : { flexDirection: 'row' }}>
                <div className="project__links">
                    <h2>Live</h2>
                    <a href={livePageLink}>
                        <FontAwesomeIcon icon={faPager} className="icon" />
                    </a>
                    <h2>Code</h2>
                    <a href={gitHubLink}>
                        <FontAwesomeIcon icon={faGithub} className="icon" />
                    </a>
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