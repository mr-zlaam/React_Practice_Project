import { useState } from "react";
import "../Header/Header.css";
import { BiMenuAltRight } from "react-icons/bi";
import { Link } from "react-router-dom";
const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const getMenuStyle = (menuOpened) => {
    if (document.documentElement.clientWidth <= 1068) {
      return {
        top: !menuOpened && "-100%",
      };
    }
  };
  return (
    <>
      <section className="h-wrapper   ">
        <div className=" h-container ">
          <div className="logo">
            <Link to="/Home" className="no-underline">
              <h1 className="text-white">Zlaam</h1>
            </Link>
          </div>
          <div className="h-menus  " style={getMenuStyle(menuOpened)}>
            <Link to="/Home">Home</Link>
            <Link to="/Companies">Our Customers</Link>
            <Link to="/Residence">Residencies</Link>
            <Link to="/Values">Our Values</Link>
            <Link to="/Contact">Contact</Link>
            <span className="h-button">
              <button className="button">
                {" "}
                <a
                  href="mailto:mrzalaam@gmail.com"
                  className="text-white "
                  style={{ textDecoration: "none" }}
                >
                  Get Started
                </a>
              </button>
            </span>
          </div>
          <div
            className="menu-icon"
            onClick={() => setMenuOpened((prev) => !prev)}
          >
            <BiMenuAltRight size={30} color="white" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
