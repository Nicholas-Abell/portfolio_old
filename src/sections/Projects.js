import '../styles/Projects.scss';
import Project from '../component/Project';

import wordle_clone_img from '../assets/Images/wordle_clone.jpeg';
import sms_construction from '../assets/Images/sms_construction.png';
import movie_database_im from '../assets/Images/movie_database.png';

const Projects = ({ projectsRef }) => {

    //map later
    const projectList = [
        {
            id: 1,
            title: 'Movie Database',
            description: 'Need to know what movie is streaming and where? Now you can. Made with React, styled with Tailwind, and hosted on Firebase.',
            image: movie_database_im,
            switchSide: false,
            gitHubLink: 'https://github.com/Nicholas-Abell/movie_database',
            livePageLink: 'https://movie-database-4bf43.web.app/',
        },
        {
            id: 2,
            title: 'SMS Construction & Remodeling',
            description: "A Landing page I made for a client. Currently Hosted on Hostinger. I learned a lot about SEO and google analytics while making sure my client's bussiness could be found using the most popular search engines.",
            image: sms_construction,
            switchSide: true,
            gitHubLink: 'https://github.com/Nicholas-Abell/handy_man',
            livePageLink: 'https://smsconstructionandremodeling.com/',
        },
        {
            id: 3,
            title: 'Wordle Game',
            description: 'A Wordle game made in React',
            image: wordle_clone_img,
            switchSide: false,
            gitHubLink: 'https://github.com/Nicholas-Abell/wordle_clone',
            livePageLink: 'https://nicholas-abell.github.io/wordle_clone/',
        },
    ];

    return (
        <section ref={projectsRef} className="projects-section" name='projectsScroll'>
            <h1 className="projects-section__title">"Projects"<em>{'/>'}</em></h1>
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