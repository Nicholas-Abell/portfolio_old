const Resume = ({ aboutMeRef }) => {
    return (
        <div className="resume">
            <div className="personalInfo">
                <h2 className="personalInfo__title">Get To Know Me</h2>
                <hr />
                <p className="personalInfo__info">I am a Font End Developer actively searching to begin my coding career and to make a difference in your workplace.</p>
                <p className="personalInfo__info">I began learning C# to make video games. Switching to front end frameworks I'm excited to turn my passion into a career.</p>
            </div>
            <div className="resume__info">
                <h1 className="resume__title" ref={aboutMeRef}>Work Experience</h1>
                <hr />
                <div className="job">
                    <div className="job__wrapper">
                        <h1 className="job__position">Shipping / Recieving Clerk</h1>
                        <h1 className="job__date">2011-PRESENT</h1>
                    </div>
                    <h1 className="job__company">Valeo</h1>
                    <ul className="job__list">
                        <li className="job__list-item">Used Barflow and SAP to recieve millions of dollars worth of product
                            daily</li>
                        <li className="job__list-item">Created and Maintained Google Sheets using my knowledge of VBA and
                            Javascript</li>
                    </ul>
                </div>
                <div className="job">
                    <div className="job__wrapper">
                        <h1 className="job__position">Web Developer</h1>
                        <h1 className="job__date">2021-PRESENT</h1>
                    </div>
                    <h1 className="job__company">Freelance</h1>
                    <ul className="job__list">
                        <li className="job__list-item">Built Responsive websites for local bussinesses</li>
                        <li className="job__list-item">Data Entry using Google Sheets / Excel</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Resume;