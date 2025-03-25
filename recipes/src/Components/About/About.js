import './About.css';

import badge from '../../assets/Images/Symbols/badge.png'

const About = () => {
    return (
        <div className="about-container">

            <article className="about-box1">
                <h2>Hello! I'm Eliza Dawson</h2>
                <hr />
                <p>Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up
                    one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going
                    through the cites of the word in classNameical literature, discovered the undoubtable source.
                    Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum"
                    (The Extremes of Good and Evil) by Cicero, written in 45 BC. </p>
                <p><strong>This book is a treatise on
                    the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,
                    "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                    The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those
                    interested.</strong></p>
                <div className="about-box1-section">
                    <div className="section">
                        <img className="badge-img" src={badge} alt="badge" />
                        <div className="section-text">
                            <h3>Master in Gastronomy, <br /> graduated from CGA.</h3>
                            <p>Contrary to popular belief, Lorem <br /> Ipsum is not simply random text</p>
                        </div>
                    </div>
                    <div className="section">
                        <img className="badge-img" src={badge} alt="badge" />
                        <div className="section-text">
                            <h3>Founder of the "Green. <br /> Lifestyle" project.</h3>
                            <p>Contrary to popular belief, Lorem <br /> Ipsum is not simply random text.<br />
                                Cama soola, cliaa.</p>
                        </div>
                    </div>
                </div>
            </article>

            <div className="about-box2">
                <div></div>
            </div>

        </div>
    )
};

export default About;