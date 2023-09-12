import Header from '../Header/Header';
import './Portfolio.css'


import Routess from '../Routes/Routes';
import { Outlet } from 'react-router-dom';
const Portfolio = () => {

    return (
        <>
            <div className="portfolio app" >
                <div className="header_toggle ">
                    <Header />
                </div>

                <div className="home_main ">
                    <Routess />

                </div>
            </div>
            <Outlet />
        </>
    )
};

export default Portfolio;