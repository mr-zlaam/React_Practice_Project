import { } from "react";
import "./Home.css";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";



const Home = () => {
    return (
        <>
            <section className="section_home ">
                <div className="home ">

                    <div className="left_txt ">
                        <h1>
                            Hi, I am Zlaam
                            <br />
                            <span className="normal"> I am  UX/UI designer</span>&nbsp;
                            <span className="and">&</span>&nbsp;
                            <span className="normal"> front-end web and App developer </span>
                        </h1>
                    </div>
                    <div className=" right_txt">
                        <Link to="./Contact">
                            <BsArrowRight size={25} />
                            <span>Hire me Now</span>
                        </Link>
                        <Link to="./About" className="about">
                            <BsArrowRight size={25} /> <span>Know more About me</span>
                        </Link>
                    </div>


                </div>
            </section>



        </>
    );
};

export default Home;
