import './Projects.scss';
import Project from './Project';

const Projects = ({ projectsRef }) => {
    return (
        <section className="projects-section">
            <h1 ref={projectsRef} name='projectsScroll' className="projects-section__title">"Projects"<em>{'/>'}</em></h1>
            <Project />
            {/* <h1 className="projects-section__title">"Projects"<em>{'/>'}</em></h1>
            <div className="carousel" onmouseover="carouselMouseOver()" onmouseleave="carouselMouseLeave()">
                <ul className="carousel__track">
                    <li className="carousel__slide">
                        <img className="carousel__image" src="../Images/wordle_clone.jpeg" alt="wordle_clone" />
                        <div className="carousel__title marker">
                            <h1>Wordle Game</h1>
                        </div>
                        <div className="carousel__info">
                            <div className="carousel__icon-container">
                                <a href="https://github.com/Nicholas-Abell/wordle_clone"><i
                                    className="carousel__icon fa-brands fa-github"></i></a>
                                <a href="https://nicholas-abell.github.io/wordle_clone/"><i
                                    className="carousel__icon fa-brands fa-github"></i></a>
                            </div>
                            <p>Made with React. You have six tries to guess the word. Red: wrong letter, Orange: right letter wrong space, Green: correct letter and space.</p>
                        </div>
                    </li>
                    <li className="carousel__slide">
                        <img className="carousel__image" src="../Images/Restaurant_Landing_Page.png" alt="" />
                        <div className="carousel__title marker">
                            <h1>Restaurant Landing Page</h1>
                        </div>
                        <div className="carousel__info">
                            <div className="carousel__icon-container">
                                <a href="https://github.com/Nicholas-Abell"><i
                                    className="carousel__icon fa-brands fa-github"></i></a>
                                <a href="https://github.com/Nicholas-Abell"><i
                                    className="carousel__icon fa-brands fa-github"></i></a>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, consectetur. Esse, optio
                                hic, recusandae accusantium voluptate sequi vel quod, quidem illo maiores</p>
                        </div>
                    </li>
                    <li className="carousel__slide">
                        <img className="carousel__image project__img" src="../Images/Grocery_List.jpeg" alt="" />
                        <div className="carousel__title marker">
                            <h1>Grocery List</h1>
                        </div>
                        <div className="carousel__info">
                            <div className="carousel__icon-container">
                                <a href="https://github.com/Nicholas-Abell"><i
                                    className="carousel__icon fa-brands fa-github"></i></a>
                                <a href="https://github.com/Nicholas-Abell"><i
                                    className="carousel__icon fa-brands fa-github"></i></a>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, consectetur. Esse, optio
                                hic, recusandae accusantium voluptate sequi vel quod, quidem illo maiores</p>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="carousel-nav" onmouseover="carouselMouseOver()">
                <button className="carousel-nav__dot" onclick="slideSelect(0)"></button>
                <div className="carousel-nav__line"></div>
                <button className="carousel-nav__dot" onclick="slideSelect(1)"></button>
                <div className="carousel-nav__line"></div>
                <button className="carousel-nav__dot" onclick="slideSelect(2)"></button>
            </div> */}
        </section>
    )
}

export default Projects;