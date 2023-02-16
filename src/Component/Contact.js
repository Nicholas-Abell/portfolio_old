import './Contact.scss';
import MessageForm from './MessageForm';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { useContext } from 'react';
import { AppContext } from '../App';

const Contact = ({ contactRef }) => {
    const { FontAwesomeIcon } = useContext(AppContext);
    return (
        <footer>
            <MessageForm contactRef={contactRef} />
            <div className="contact-links">
                <a href="https://github.com/Nicholas-Abell">
                    <FontAwesomeIcon icon={faGithub} className="contact-links__icon" />
                </a>
                <a href="https://www.linkedin.com/in/nicholas-abell-348807192/">
                    <FontAwesomeIcon icon={faLinkedin} className="contact-links__icon" />
                </a>
            </div>
        </footer>
    )
}

export default Contact;