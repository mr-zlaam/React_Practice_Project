import { } from "react";
import "./Work.css";
import one from "../../../public/images/Homes.jpg";
import two from "../../../public/images/Calculator.jpg";
import three from "../../../public/images/Textedit.jpg";
import four from "../../../public/images/TicCross.jpg";
import five from "../../../public/images/TodoList.jpg";
import { BsArrowDown } from 'react-icons/bs'
import { Link } from "react-router-dom";


const Work = () => {
    return (
        <>
            <section className="work">
                <div className="projects w-fit m-auto">
                    <h1 className="font-extrabold">My Previous Work</h1>
                </div>
                <div className="work_controller">
                    <div className="cards ">

                        <div className="detail_project">
                            <div className="project_view">
                                <Link to="https://dreamhomes.netlify.app/" target="_blank"> <span>View this Project</span><BsArrowDown className="my_arrow" size={15} /></Link>
                                {/* <a href="#"><span>View Project Detail </span><BsArrowDown className="my_arrow" size={15} /></a> */}
                            </div>
                            <div className="card1 share_card">
                                <img src={one} alt="" />
                            </div>
                        </div>
                        <div className="detail_project">
                            <div className="project_view">
                                <Link to="https://calculatorzlaam.netlify.app/" target="_blank"> <span>View this Project</span><BsArrowDown className="my_arrow" size={15} /></Link>
                                {/* <a href="#"><span>View Project Detail </span><BsArrowDown className="my_arrow" size={15} /></a> */}
                            </div>
                            <div className="card2 share_card">
                                <img src={two} alt="" />
                            </div>
                        </div>
                        <div className="detail_project">
                            <div className="project_view">
                                <Link to="https://edittxt.netlify.app/" target="_blank"> <span>View this Project</span><BsArrowDown className="my_arrow" size={15} /></Link>
                                {/* <a href="#"><span>View Project Detail </span><BsArrowDown className="my_arrow" size={15} /></a> */}
                            </div>
                            <div className="card3 share_card">
                                <img src={three} alt="" />
                            </div>
                        </div>
                        <div className="detail_project">
                            <div className="project_view">
                                <Link to="https://tic-cros.netlify.app/" target="_blank"> <span>View this Project</span><BsArrowDown className="my_arrow" size={15} /></Link>
                                {/* <a href="#"><span>View Project Detail </span><BsArrowDown className="my_arrow" size={15} /></a> */}
                            </div>
                            <div className="card4 share_card">
                                <img src={four} alt="" />
                            </div>
                        </div>
                        <div className="detail_project">
                            <div className="project_view">
                                <Link to="https://todolist-07.netlify.app/" target="_blank"> <span>View this Project</span><BsArrowDown className="my_arrow" size={15} /></Link>
                                {/* <a href="#"><span>View Project Detail </span><BsArrowDown className="my_arrow" size={15} /></a> */}
                            </div>
                            <div className="card5 share_card">
                                <img src={five} alt="" />
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
};

export default Work;
