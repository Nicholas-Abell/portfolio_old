import './Projects.scss';
import Project from './Project';

const Projects = ({ projectsRef }) => {
    return (
        <section className="projects-section" name='projectsScroll'>
            <h1 ref={projectsRef} className="projects-section__title">"Projects"<em>{'/>'}</em></h1>
            <Project />
        </section>
    )
}

export default Projects;