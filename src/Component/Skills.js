import './Skills.scss';
import Skill from './Skill';
import { faHtml5, faCss3, faReact, faSass, } from '@fortawesome/free-brands-svg-icons';

const Skills = ({ skillsRef }) => {
    return (
        <section className="skill-section">
            <div className="skills">
                <Skill icon={faReact} skillName='React' slideInFromLeft={true} />
                <Skill icon={faSass} skillName='SCSS' slideInFromLeft={false} />
                <Skill icon={faCss3} skillName='CSS3' slideInFromLeft={true} />
                <Skill icon={faHtml5} skillName='HTML5' slideInFromLeft={false} />
            </div >

            <div className="skill-info x">
                <p className="skill-info__text">
                    I am proficient with vanilla HTML, CSS, Javascript and several
                    frameworks. I am currently
                    learning React.
                </p>
                <div className="skill-info__title-card marker">
                    <h1 ref={skillsRef} name='skillsScroll' className="skill-info__title skill-info__title--rotate rotate-text-r">Skills <em>=</em></h1>
                </div>
            </div>
        </section >
    )
}

export default Skills;