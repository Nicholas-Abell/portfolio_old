import '../styles/Skills.scss';
import Skill from '../component/Skill';
import { faHtml5, faCss3, faReact, faSass, faJs, faBootstrap } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SiTailwindcss, SiFirebase } from 'react-icons/si'

const Skills = ({ skillsRef }) => {
    return (
        <section className="skill-section" name='skillsScroll'>
            <div className="skills">
                <div className='skills__wrapper'>
                    <h1 className='skills__title skills__title--primary'>Front-End</h1>
                    <div className='skills__bucket'>
                        <Skill icon={faHtml5} title='HTML' />
                        <Skill icon={faCss3} title='CSS' />
                        <Skill icon={faJs} title='JavaScript' />
                    </div>
                </div>
                <div className='skills__wrapper'>
                    <h1 className='skills__title'>Frameworks / Pre-processors</h1>
                    <div className='skills__bucket'>
                        <Skill icon={faSass} title='SCSS' />
                        <div className='card'>
                            <SiTailwindcss className='icon card__icon' style={{ width: '90px', height: '90px' }} />
                            <p className='card__title'>Tailwind</p>
                        </div>
                        <Skill icon={faBootstrap} title='Bootstrap' />
                    </div>
                </div>
                <div className='skills__wrapper'>
                    <h1 className='skills__title'>Libraries</h1>
                    <div className='skills__bucket'>
                        <Skill icon={faReact} title='React Js' />
                    </div>
                </div>
            </div >

            <div className="skills skills--backend">
                <div className='skills__wrapper'>
                    <h1 className='skills__title skills__title--primary'>Back-End</h1>
                    <div className='skills__bucket'>
                        <div className='card'>
                            <SiFirebase className='icon card__icon' style={{ width: '90px', height: '90px' }} />
                            <p className='card__title'>FireBase</p>
                        </div>
                    </div>
                </div>
            </div >

            <div className="skillInfo">
                <div className="skillInfo__title-card marker">
                    <h1 ref={skillsRef} className="skillInfo__title skillInfo__title--rotate rotate-text-r">Skills <em>=</em></h1>
                </div>
            </div>

        </section >
    )
}

export default Skills;