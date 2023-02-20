import './Skills.scss';
import { faHtml5, faCss3, faReact, faSass, faJs, faBootstrap, } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Skills = ({ skillsRef }) => {
    return (
        <section className="skill-section" name='skillsScroll'>
            <div className="skills">
                <div className='skills__wrapper'>
                    <h1 className='skills__title skills__title--primary'>Front-End</h1>
                    <div className='skills__bucket'>
                        <FontAwesomeIcon icon={faHtml5} className="icon" />
                        <FontAwesomeIcon icon={faCss3} className="icon" />
                        <FontAwesomeIcon icon={faJs} className="icon" />
                    </div>
                </div>
                <div className='skills__wrapper'>
                    <h1 className='skills__title'>Frameworks / Pre-processors</h1>
                    <div className='skills__bucket'>
                        <FontAwesomeIcon icon={faSass} className="icon" />
                        <FontAwesomeIcon icon={faBootstrap} className="icon" />
                    </div>
                </div>
                <div className='skills__wrapper'>
                    <h1 className='skills__title'>Libraries</h1>
                    <div className='skills__bucket'>
                        <FontAwesomeIcon icon={faReact} className="icon" />
                    </div>
                </div>
            </div >

            <div className="skills">
                <div className='skills__wrapper'>
                    <h1 className='skills__title skills__title--primary'>Back-End</h1>
                    <div className='skills__bucket'>
                        <p>Goals for the future</p>
                    </div>
                </div>
            </div >

            <div className="skillInfo">
                <div className="skillInfo__title-card marker">
                    <h1 ref={skillsRef} className="skillInfo__title skillInfo__title--rotate rotate-text-r">Skills <em>=</em></h1>
                </div>
            </div>

            {/* <div className="aboutMe__titleCard">
                <div className="aboutMe__titleCard" ref={aboutMeRef}>
                    <h1 className="aboutMe__title aboutMe__title--rotate rotate-text-l">{'<'} About_Me</h1>
                </div>
            </div> */}

        </section >
    )
}

export default Skills;