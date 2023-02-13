import './Header.scss';

const Header = () => {
    return (
        <header>
            <div class="background --active"></div>
            <div class="title-card-home marker" id="home">
                <h1 class="title-card-home__text--s">
                    Hello There, I'm
                </h1>
                <br />
                <h1 class="title-card-home__text">
                    Nicholas Abell
                </h1>
                <div class="title-card-home__wrapper">
                    <ul class="dynamic-text-list">
                        <li class="dynamic-text-list__item">Web Developer</li>
                        <li class="dynamic-text-list__item">Hire-able Guy</li>
                        <li class="dynamic-text-list__item">Your Future Employee</li>
                    </ul>
                </div>
            </div>
            <div class="arrow first-arrow"></div>
            <div class="arrow second-arrow"></div>
        </header>
    )
}

export default Header;