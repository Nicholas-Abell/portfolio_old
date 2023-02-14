import './Contact.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
    return (
        <footer>
            <div className="contact-section">
                <h1 className="contact-section__title marker">.Contact-Me{'{'}</h1>
                <form action="https://formsubmit.co/darkforceyoda@gmail.com" method="POST" className="contact-form">
                    <div className="contact-form__user-info">
                        <input name="name" type="text" placeholder="name" required className="contact-form__name" />
                        <input name="email" type="email" placeholder="email" required className="contact-form__email" />
                    </div>
                    <textarea name="message" placeholder="...message" id="message" cols="50" rows="10"
                        className="contact-form__user-text"></textarea>
                    <input type="submit" value="Submit" id="submit" className="contact-form__submit-btn" />
                    <input type="hidden" name="_next" value="http://127.0.0.1:5500/index.html" />
                    <input type="hidden" name="_autoresponse"
                        value="Thank you for contacting me. I will get in touch soon." />
                </form>
                <h1 className="contact-section__title">{'}'}</h1>
            </div>

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