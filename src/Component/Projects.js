import './Projects.scss';
import Project from './Project';

const Projects = () => {

    // const track = document.querySelector('.carousel__track');
    // const slides = Array.from(track.children);
    // const nav = document.querySelector('.carousel__nav');
    // const dots = document.querySelectorAll('.carousel-nav__dot')
    // const carousel = document.querySelector('.carousel');
    // const carouselSlide = document.querySelector('.carousel__slide');
    // let slideIndex = 0;
    // let carouselTimer = setTimeout(showSlides, 3000);

    // function showSlides(n) {
    //     if (screen.width >= 800) {

    //         let i;
    //         let slides = Array.from(track.children);

    //         for (i = 0; i < slides.length; i++) {
    //             slides[i].style.opacity = '0';
    //             dots[i].classNameList.remove('carousel-nav__dot--active');


    //         }

    //         slideIndex++;

    //         if (slideIndex > slides.length) { slideIndex = 1 };
    //         slides[slideIndex - 1].style.opacity = '100';
    //         dots[slideIndex - 1].classNameList.add('carousel-nav__dot--active');
    //         carouselTimer = setTimeout(showSlides, 3500);
    //     }
    // }

    // function slideSelect(n) {
    //     showSlides(slideIndex = n);
    // };

    // function carouselMouseOver() {
    //     clearTimeout(carouselTimer);
    // };

    // function carouselMouseLeave() {
    //     carouselTimer = setTimeout(showSlides, 3500);
    // };

    return (
        <section className="projects-section">
            <h1 className="projects-section__title">"Projects"<em>{'/>'}</em></h1>
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