import './Contact.scss';

const Contact = () => {
    return (
        <footer>
            <div class="contact-section">
                <h1 class="contact-section__title marker">.Contact-Me{'{'}</h1>
                <form action="https://formsubmit.co/darkforceyoda@gmail.com" method="POST" class="contact-form">
                    <div class="contact-form__user-info">
                        <input name="name" type="text" placeholder="name" required class="contact-form__name" />
                        <input name="email" type="email" placeholder="email" required class="contact-form__email" />
                    </div>
                    <textarea name="message" placeholder="...message" id="message" cols="50" rows="10"
                        class="contact-form__user-text"></textarea>
                    <input type="submit" value="Submit" id="submit" class="contact-form__submit-btn" />
                    <input type="hidden" name="_next" value="http://127.0.0.1:5500/index.html" />
                    <input type="hidden" name="_autoresponse"
                        value="Thank you for contacting me. I will get in touch soon." />
                </form>
                <h1 class="contact-section__title">{'}'}</h1>
            </div>

            <div class="contact-links">
                <a href="https://github.com/Nicholas-Abell"><i class="contact-links__icon fa-brands fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/nicholas-abell-348807192/
            "><i class="contact-links__icon fa-brands fa-linkedin"></i>
                </a>
            </div>
        </footer>
    )
}

export default Contact;