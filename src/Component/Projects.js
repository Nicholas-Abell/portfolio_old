import './Projects.scss';
import Project from './Project';

import wordle_clone_img from '../assets/Images/wordle_clone.jpeg';
import resteraunt_landing_page_img from '../assets/Images/Restaurant_Landing_Page.png';
import testImg from '../assets/Images/florian-olivo-4hbJ-eymZ1o-unsplash.jpg';

const Projects = ({ projectsRef }) => {

    //map later
    const projectList = [
        {
            id: 1,
            title: 'Wordle Game',
            description: 'A Wordle game made in React',
            image: wordle_clone_img,
            switchSide: false,
            gitHubLink: 'https://github.com/Nicholas-Abell/wordle_clone',
            livePageLink: 'https://nicholas-abell.github.io/wordle_clone/',
        },
        {
            id: 2,
            title: 'Restaurant Landing Page',
            description: 'A stitic website made with vanilla HTML, and SCSS',
            image: resteraunt_landing_page_img,
            switchSide: true,
            gitHubLink: 'https://github.com/Nicholas-Abell/Restaurant_Landing_Page',
            livePageLink: 'https://nicholas-abell.github.io/Restaurant_Landing_Page/',
        },
        {
            id: 3,
            title: 'Test',
            description: 'Test, Make Someting Worthy of employement',
            image: testImg,
            switchSide: false,
            gitHubLink: '/',
            livePageLink: '/',
        }
    ];

    return (
        <section className="projects-section" name='projectsScroll'>
            <h1 ref={projectsRef} className="projects-section__title">"Projects"<em>{'/>'}</em></h1>
            {
                projectList.map((project) => {
                    return (
                        <Project
                            key={project.id}
                            title={project.title}
                            description={project.description}
                            image={project.image}
                            switchSide={project.switchSide}
                            gitHubLink={project.gitHubLink}
                            livePageLink={project.livePageLink}
                        />
                    )
                })
            }
        </section>
    )
}

export default Projects;