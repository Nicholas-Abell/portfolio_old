import './Projects.scss';

const Projects = () => {
    return (
        <section class="projects-section">
            <h1 class="projects-section__title">"Projects"<em>{'/>'}</em></h1>
            <div class="carousel" onmouseover="carouselMouseOver()" onmouseleave="carouselMouseLeave()">
                <ul class="carousel__track">
                    <li class="carousel__slide">
                        <img class="carousel__image" src="Images/wordle_clone.jpeg" alt="wordle_clone" />
                        <div class="carousel__title marker">
                            <h1>Wordle Game</h1>
                        </div>
                        <div class="carousel__info">
                            <div class="carousel__icon-container">
                                <a href="https://github.com/Nicholas-Abell/wordle_clone"><i
                                    class="carousel__icon fa-brands fa-github"></i></a>
                                <a href="https://nicholas-abell.github.io/wordle_clone/"><i
                                    class="carousel__icon fa-brands fa-github"></i></a>
                            </div>
                            <p>Made with React. You have six tries to guess the word. Red: wrong letter, Orange: right letter wrong space, Green: correct letter and space.</p>
                        </div>
                    </li>
                    <li class="carousel__slide">
                        <img class="carousel__image" src="Images/Restaurant_Landing_Page.png" alt="" />
                        <div class="carousel__title marker">
                            <h1>Restaurant Landing Page</h1>
                        </div>
                        <div class="carousel__info">
                            <div class="carousel__icon-container">
                                <a href="https://github.com/Nicholas-Abell"><i
                                    class="carousel__icon fa-brands fa-github"></i></a>
                                <a href="https://github.com/Nicholas-Abell"><i
                                    class="carousel__icon fa-brands fa-github"></i></a>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, consectetur. Esse, optio
                                hic, recusandae accusantium voluptate sequi vel quod, quidem illo maiores</p>
                        </div>
                    </li>
                    <li class="carousel__slide">
                        <img class="carousel__image project__img" src="Images/Grocery_List.jpeg" alt="" />
                        <div class="carousel__title marker">
                            <h1>Grocery List</h1>
                        </div>
                        <div class="carousel__info">
                            <div class="carousel__icon-container">
                                <a href="https://github.com/Nicholas-Abell"><i
                                    class="carousel__icon fa-brands fa-github"></i></a>
                                <a href="https://github.com/Nicholas-Abell"><i
                                    class="carousel__icon fa-brands fa-github"></i></a>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, consectetur. Esse, optio
                                hic, recusandae accusantium voluptate sequi vel quod, quidem illo maiores</p>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="carousel-nav" onmouseover="carouselMouseOver()">
                <button class="carousel-nav__dot" onclick="slideSelect(0)"></button>
                <div class="carousel-nav__line"></div>
                <button class="carousel-nav__dot" onclick="slideSelect(1)"></button>
                <div class="carousel-nav__line"></div>
                <button class="carousel-nav__dot" onclick="slideSelect(2)"></button>
            </div>
        </section>
    )
}

export default Projects;