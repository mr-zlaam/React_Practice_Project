import React from "react";
import "../Project 2/LoginForm.css";
const LoginNavigation = () => {
  return (
    <>
      <header>
        <div className="logo">
          <h1>
            <strong>Zlaam</strong>
          </h1>
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
              <a href="/Contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default LoginNavigation;
