import { } from 'react';
import './About.css';
import { Link } from 'react-router-dom';
import { BsArrowDown } from "react-icons/bs";

const About = () => {
    return (
        <>
            <section className="about">



                <div className="resume">
                    <div className="downarrow">
                        <BsArrowDown size={20} />
                    </div>
                    <Link className='resume_btn'>Resume</Link>
                </div>
                <div className="main_about">
                    <div className="info_about">
                        <h1>Who am i?</h1>
                        <p>
                            I am Siraj, professionally known as Zlaam. I am a dedicated and skilled web and App developer with a year of hands-on experience in the industry. My true passion lies in transforming concepts into tangible digital solutions, and I wholeheartedly embrace new challenges that come my way.
                        </p>
                    </div>
                    <div className="skill">
                        <p className='para'>
                            My expertise spans across a spectrum of technologies including:-
                        </p>
                        <div className="skill_controller">
                            <div className="htmls  web_chart">
                                <p className='para_child'>HTML</p>
                                <p className='para_child'>85%</p>
                            </div>
                            <div className="css  web_chart">
                                <p className='para_child'>CSS</p>
                                <p className='para_child'>78%</p>
                            </div>
                            <div className="js  web_chart">
                                <p className='para_child'>JS</p>
                                <p className='para_child'>70%</p>
                            </div>
                            <div className="tailwind  web_chart">
                                <p className='para_child'>Tailwind</p>
                                <p className='para_child'>74%</p>
                            </div>
                            <div className="bootstrap  web_chart">
                                <p className='para_child'>Bootsrap</p>
                                <p className='para_child'>60%</p>
                            </div>
                            <div className="reactjs  web_chart">
                                <p className='para_child'>React</p>
                                <p className='para_child'>80%</p>
                            </div>
                            <div className="reactnative  web_chart">
                                <p className='para_child'>React-Native</p>
                                <p className='para_child'>70%</p>
                            </div>
                            <div className="  rotti">
                                <p className='para_child'></p>
                                <p className='para_child'></p>
                            </div>

                        </div>
                    </div>

                </div>
            </section>
        </>
    )
};

export default About;