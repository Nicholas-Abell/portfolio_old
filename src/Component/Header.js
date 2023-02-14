import './Header.scss';

const Header = () => {
    return (
        <header>
            <div className="background --active"></div>
            <div className="title-card-home marker" id="home">
                <h1 className="title-card-home__text--s">
                    Hello There, I'm
                </h1>
                <br />
                <h1 className="title-card-home__text">
                    Nicholas Abell
                </h1>
                <div className="title-card-home__wrapper">
                    <ul className="dynamic-text-list">
                        <li className="dynamic-text-list__item">Web Developer</li>
                        <li className="dynamic-text-list__item">Hire-able Guy</li>
                        <li className="dynamic-text-list__item">Your Future Employee</li>
                    </ul>
                </div>
            </div>
            <div className="arrow first-arrow"></div>
            <div className="arrow second-arrow"></div>
        </header>
    )
}

export default Header;