import './Navbar.scss';

const Navbar = () => {
    return (
        <nav class="navbar">
            <button onclick="scrollToElementCentered('.title-card-home')">
                <i class="navbar__icon navbar__icon--active fa fa-home" id="home-btn" aria-hidden="true"></i>
            </button>
            <div class="navbar__line"></div>
            <button onclick="scrollToElementCentered('.about-me__title-card')">
                <i class="navbar__icon fa-solid fa-user" id="profile-btn"></i>
            </button>
            <div class="navbar__line"></div>
            <button onclick="scrollToElementCentered('.skill-info__title-card')">
                <i class="navbar__icon fa-solid fa-code" id="skill-btn"></i>
            </button>
            <div class="navbar__line"></div>
            <button onclick="scrollToElement('.projects-section__title')">
                <i class="navbar__icon fa-brands fa-codepen" id="projects-btn"></i>
            </button>
            <div class="navbar__line"></div>
            <button onclick="scrollToElement('.contact-section__title')">
                <i class="navbar__icon fa-solid fa-envelope" id="contact-btn"></i>
            </button>
        </nav>
    );
}

export default Navbar;