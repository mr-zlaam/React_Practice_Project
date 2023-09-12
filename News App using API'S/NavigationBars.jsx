import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
// import NavDropdown from "react-bootstrap/NavDropdown";

const Navigation = () => {
  return (
    <Navbar expand="lg" className=" fixed-top bg-dark text-white ">
      <Container>
        <Navbar.Brand to="/home" className="font-bold text-white text-4xl">
          <h3 className=" hero-bar font-bold hover:opacity-75 cursor-pointer transition-transform ">
            News-<span className="text-white">-World</span>
          </h3>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="text-white togglebtn"
        />
        <Navbar.Collapse id="basic-navbar-nav" className="text-white">
          <Nav className="me-auto">
            <Link to="/home" className="text-white font-bold mx-4 no-underline">
              Home
            </Link>

            <Link
              to="/business"
              className="text-white font-bold mx-4 no-underline"
            >
              Business
            </Link>
            <Link
              to="/entertainment"
              className="text-white font-bold mx-4 no-underline"
            >
              Entertainment
            </Link>
            <Link
              to="/general"
              className="text-white font-bold mx-4 no-underline"
            >
              General
            </Link>
            <Link
              to="/health"
              className="text-white font-bold mx-4 no-underline"
            >
              Health
            </Link>
            <Link
              to="/science"
              className="text-white font-bold mx-4 no-underline"
            >
              Science
            </Link>
            <Link
              to="/sports"
              className="text-white font-bold mx-4 no-underline"
            >
              Sports
            </Link>
            <Link
              to="/technology"
              className="text-white font-bold mx-4 no-underline"
            >
              Technology
            </Link>
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item to="/action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item to="/action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item to="/action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item to="/action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown> */}
          </Nav>
          {/* <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
