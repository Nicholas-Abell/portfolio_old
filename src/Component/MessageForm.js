const MessageForm = ({ contactRef }) => {
    return (
        <div className="contact-section">
            <h1 ref={contactRef} className="contact-section__title marker">.Contact-Me{'{'}</h1>
            <form action="https://formsubmit.co/darkforceyoda@gmail.com" method="POST" className="contact-form">
                <div className="contact-form__user-info">
                    <input name="name" type="text" placeholder="name" required className="contact-form__name" />
                    <input name="email" type="email" placeholder="email" required className="contact-form__email" />
                </div>
                <textarea name="message" placeholder="...message" id="message" cols="50" rows="10"
                    className="contact-form__user-text"></textarea>
                <input type="submit" value="Submit" id="submit" className="contact-form__submit-btn" />
                <input type="hidden" name="_next" value="https://nicholas-abell.github.io/portfolio/" />
                <input type="hidden" name="_autoresponse"
                    value="Thank you for contacting me. I will get in touch soon." />
            </form>
            <h1 className="contact-section__title">{'}'}</h1>
        </div>
    )
}

export default MessageForm;