import { useContext } from 'react';
import { AppContext } from '../App';
import './AboutMe.scss';

const AboutMe = ({aboutMeRef}) => {
    const { ref, inView } = useContext(AppContext)
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
            <div className="resume">
                <div className="resume__info">
                    <h1 className="resume__title" ref={aboutMeRef}>Work Experience</h1>
                    <hr />
                    <div className="job">
                        <div className="job__head">
                            <h1 className="job__position">Shipping / Recieving Clerk</h1>
                            <h1 className="job__date">2011-PRESENT</h1>
                        </div>
                        <h1 className="job__company">Valeo</h1>
                        <ul className="job__list">
                            <li className="job__list-item">Used Barflow and SAP to recieve millions of dollars worth of product
                                daily</li>
                            <li className="job__list-item">Created and Maintained Google Sheets using my knowledge of VBA and
                                Javascript</li>
                        </ul>
                    </div>
                    <div className="job">
                        <div className="job__head">
                            <h1 className="job__position">Web Developer</h1>
                            <h1 className="job__date">2021-PRESENT</h1>
                        </div>
                        <h1 className="job__company">Freelance</h1>
                        <ul className="job__list">
                            <li className="job__list-item">Built Responsive websites for local bussinesses</li>
                            <li className="job__list-item">Data Entry using Google Sheets / Excel</li>
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default AboutMe;