import './AboutMe.scss';

const AboutMe = () => {
    return (
        <main class="about-me-section">
            <div class="about-me">
                <div class="about-me__title-card marker">
                    <h1 class="about-me__title about-me__title--rotate rotate-text-l">{'<'} About_Me</h1>
                    <hr />
                </div>
                <p class="about-me__info">A self taught developer looking to make a difference in your
                    workplace</p>
            </div>
            <div class="resume">
                <div class="resume__info">
                    <h1 class="resume__title">Work Experience</h1>
                    <hr />
                    <div class="job">
                        <div class="job__head">
                            <h1 class="job__position">Shipping / Recieving Clerk</h1>
                            <h1 class="job__date">2011-PRESENT</h1>
                        </div>
                        <h1 class="job__company">Valeo</h1>
                        <ul class="job__list">
                            <li class="job__list-item">Used Barflow and SAP to recieve millions of dollars worth of product
                                daily</li>
                            <li class="job__list-item">Created and Maintained Google Sheets using my knowledge of VBA and
                                Javascript</li>
                        </ul>
                    </div>
                    <div class="job">
                        <div class="job__head">
                            <h1 class="job__position">Web Developer</h1>
                            <h1 class="job__date">2021-PRESENT</h1>
                        </div>
                        <h1 class="job__company">Freelance</h1>
                        <ul class="job__list">
                            <li class="job__list-item">Built Responsive websites for local bussinesses</li>
                            <li class="job__list-item">Data Entry using Google Sheets / Excel</li>
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default AboutMe;