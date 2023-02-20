import './AboutMe.scss';
import Resume from './Resume';

const AboutMe = ({ aboutMeRef }) => {
    return (
        <main className="aboutMe" name='aboutMeScroll'>
            <div className="aboutMe__titleCard">
                <div className="aboutMe__titleCard" ref={aboutMeRef}>
                    <h1 className="aboutMe__title aboutMe__title--rotate rotate-text-l">{'<'} About_Me</h1>
                </div>
            </div>
            <Resume />
            <div name='target'></div>

        </main>
    )
}

export default AboutMe;