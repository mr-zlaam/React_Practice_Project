import React from "react";
import "./BrandHeader.css";

import logo from ".././../././../src/assest/logo.png";

const BrandHeader = () => {
  return (
    <>
      <div className="mainContainer">
        <header>
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <nav>
            <ul>
              <li>
                <a href="/Home">Home</a>
              </li>
              <li>
                <a href="/About">About</a>
              </li>
              <li>
                <a href="/Loacation">Location</a>
              </li>
              <li>
                <a href="/Contact">Contact</a>
              </li>
            </ul>
          </nav>
          <div className="btn">
            <button>Login</button>
          </div>
        </header>
      </div>
    </>
  );
};

export default BrandHeader;
