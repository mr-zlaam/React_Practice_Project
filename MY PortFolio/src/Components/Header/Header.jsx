import './Header.css'
import { BiMenu } from 'react-icons/bi';
import Menus from "./HeaderMenu";
import { useState } from "react";
import { Link } from 'react-router-dom';

const Header = () => {
    const [menuOpened, setMenuOpened] = useState(false);

    const closedMenu = () => {
        setMenuOpened(false);
    };

    return (
        <section className="section_header app ">
            <header className="header flex justify-between items-center ">
                <div className="menus ">
                    <div className="logo">
                        <h1><Link to="/" className='zlaam'>Zlaam</Link></h1>
                    </div>
                    <Menus closedMenu={closedMenu} isOpen={menuOpened} />
                </div>
                <div className="menu_icon" onClick={() => setMenuOpened(!menuOpened)}>
                    <BiMenu size={30} color='white' />
                </div>
            </header>
        </section>
    );
};

export default Header;
