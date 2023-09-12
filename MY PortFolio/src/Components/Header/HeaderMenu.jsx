import { PropTypes } from 'prop-types';
import './HeaderMenu.css';
import { Link } from 'react-router-dom'
const Menus = ({ closedMenu, isOpen }) => {
    const menuClass = isOpen ? 'navigation app menu-open' : 'navigation app';

    return (
        <div className={menuClass}>
            <nav>
                <ul>
                    <Link to="/" onClick={closedMenu}>Home</Link>
                    <Link to="./About" onClick={closedMenu}>About</Link>
                    <Link to="./Work" onClick={closedMenu}>Work</Link>
                    <Link to="./Contact" onClick={closedMenu}>Contact</Link>
                </ul>
            </nav>
        </div>
    );
};

Menus.propTypes = {
    closedMenu: PropTypes.func.isRequired,
    isOpen: PropTypes.bool.isRequired,
};

export default Menus;
