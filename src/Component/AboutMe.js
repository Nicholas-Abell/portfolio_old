import './AboutMe.scss';
import Resume from './Resume';

const AboutMe = ({ aboutMeRef }) => {
    return (
        <main className="about-me-section">
            <div className="about-me">
                <div className="about-me__title-card marker" inView>
                    <h1 className="about-me__title about-me__title--rotate rotate-text-l">{'<'} About_Me</h1>
                    <hr />
                </div>
                <p className="about-me__info">A self taught developer looking to make a difference in your
                    workplace</p>
            </div>
            <Resume />
        </main>
    )
}

export default AboutMe;