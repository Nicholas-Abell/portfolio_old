import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { useContext } from 'react';
import { AppContext } from '../App';

const Project = () => {

    const { FontAwesomeIcon } = useContext(AppContext);

    return (
        <div className="project">
            <h1 className='project__title'>Title</h1>
            <div className='flex'>
                <div className="project__techStack">
                    <FontAwesomeIcon icon={faGithub} className="icon" />
                    <FontAwesomeIcon icon={faGithub} className="icon" />
                    <FontAwesomeIcon icon={faGithub} className="icon" />
                    <FontAwesomeIcon icon={faGithub} className="icon" />
                </div>
                <div className="fake-img">
                    <div className='overlay'></div>
                </div>
            </div>
        </div>
    )
}

export default Project;