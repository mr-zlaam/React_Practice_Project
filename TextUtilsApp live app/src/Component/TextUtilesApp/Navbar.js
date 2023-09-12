import React, { useState } from "react";
import "./main.css";
import "./mobile.css";
import TextArea from "./textArea";

const Navbar = () => {
  const [MyStyle, setMyStyle] = useState({
    backgroundColor: "#28282b",
    color: "white",
  });
  const [TextBtn, setTextBtn] = useState("Enable Light Mode");
  const toggler = () => {
    if (MyStyle.backgroundColor === "#28282b") {
      setMyStyle({
        backgroundColor: "lightgray",

        color: " black",
      });
      document.title = "TextCustomise-Light ";
      setTextBtn("Enable Dark Mode");
    } else {
      setMyStyle({
        backgroundColor: "#28282b",
        color: "white",
      });
      setTextBtn("Enable Light Mode");
      document.title = "TextCustomise-Dark ";
    }
    // console.log("hello");
  };
  return (
    <>
      <div className="hero">
        <header>
          <div className="main">
            <div className="lognav">
              <div className="logo">
                <h4>TextCustomize</h4>
              </div>
            </div>
            <div className="Darkmode">
              <button className="dark" onClick={toggler}>
                {TextBtn}
              </button>
            </div>
          </div>
        </header>
      </div>
      <div className="mainPage">
        <TextArea props={MyStyle} />
      </div>
    </>
  );
};

export default Navbar;
