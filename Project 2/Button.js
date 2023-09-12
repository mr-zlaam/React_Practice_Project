import React from "react";
import { MdMessage } from "react-icons/md";
import { MdCall } from "react-icons/md";
import { MdOutlineMailOutline } from "react-icons/md";

const Buttons = () => {
  const btnClick = () => {
    console.log("I just called you");
  };
  return (
    <>
      <div className="btn-hero-cont">
        <div className="btn-container">
          <div className="contact-container">
            <h1 className="contact">Contact Us</h1>
            <p className="para">
              Feel Free to Contact us. Your Data is NOt going to leak. You can
              Trust on us with any bet.
            </p>
          </div>
          <div className="main-btn">
            <button className="chat-btn">
              <MdMessage />
              Via chat
            </button>
            <button className="call-btn" onClick={btnClick}>
              <MdCall />
              Via Call
            </button>
          </div>
          <div className="email">
            <button>
              <MdOutlineMailOutline size={20} />
              Via Email Form
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Buttons;
