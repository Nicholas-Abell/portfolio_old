import './AboutMe.scss';
import Resume from './Resume';

const AboutMe = ({ aboutMeRef }) => {
    return (
        <main className="aboutMeSection" name='aboutMeScroll'>
            <div className="aboutMeSection__titleCard">
                <div className="aboutMeSection__titleCard" ref={aboutMeRef}>
                    <h1 className="aboutMeSection__title aboutMeSection__title--rotate rotate-text-l">{'<'} About_Me</h1>
                </div>
            </div>
                <Resume />
        </main>
    )
}

export default AboutMe;