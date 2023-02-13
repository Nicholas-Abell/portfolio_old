import './Skills.scss';

const Skills = () => {
    return (
        <section class="skill-section">
            <div class="skills">
                <div class="skill">
                    <div class="skill__title-card slide-in from-left">
                        <h1 class="skill__title">HTML</h1>
                    </div>
                    <div class="skill__icon-container i">
                        <i class="skill__icon fa-brands fa-html5"></i>
                    </div>
                </div>
                <div class="skill">
                    <div class="skill__icon-container i">
                        <i class="skill__icon fa-brands fa-css3-alt"></i>
                    </div>
                    <div class="skill__title-card slide-in from-right">
                        <h1 class="skill__title">CSS3</h1>
                    </div>
                </div>
                <div class="skill">
                    <div class="skill__title-card slide-in from-left">
                        <h1 class="slide-in from-left">Javascript</h1>
                    </div>
                    <div class="skill__icon-container i">
                        <i class="skill__icon fa-brands fa-square-js"></i>
                    </div>
                </div>
                <div class="skill">
                    <div class="skill__icon-container i">
                        <i class="skill__icon fa-brands fa-bootstrap"></i>
                    </div>
                    <div class="skill__title-card slide-in from-right">
                        <h1 class="skill__title">Bootstrap5</h1>
                    </div>
                </div>
                <div class="skill">
                    <div class="skill__title-card slide-in from-left">
                        <h1 class="skill__title">Sass</h1>
                    </div>
                    <div class="skill__icon-container i">
                        <i class="skill__icon fa-brands fa-sass"></i>
                    </div>
                </div>
            </div>

            <div class="skill-info x">
                <p class="skill-info__text">I am proficient with vanilla HTML, CSS, Javascript and several
                    frameworks. I am currently
                    learning React. </p>
                <div class="skill-info__title-card marker">
                    <h1 class="skill-info__title skill-info__title--rotate rotate-text-r">Skills <em>=</em></h1>
                </div>
            </div>
        </section>
    )
}

export default Skills;