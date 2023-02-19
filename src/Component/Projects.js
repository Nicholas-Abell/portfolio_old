import './Projects.scss';
import Project from './Project';

const Projects = ({ projectsRef }) => {

    //map later
    const projectList = [
        {
            id: 1,
            title: 'Wordle Game',
            description: '',
            image: ''
        },
        {
            id: 2,
            title: '',
            description: '',
            image: ''
        }
    ];

    return (
        <section className="projects-section" name='projectsScroll'>
            <h1 ref={projectsRef} className="projects-section__title">"Projects"<em>{'/>'}</em></h1>
            <Project />
            <Project />
        </section>
    )
}

export default Projects;