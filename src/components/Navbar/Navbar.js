import React from "react";
import "./Navbar.css";
import myLogo from "./Logo.png";

const Navbar = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={myLogo} alt=" " width="350" height="70" />
      </div>
      <div className="menu-wrap">
        <input type="checkbox" className="toggler" />
        <div className="hamburger">
          <p>Menu</p>
          <div></div>
        </div>
        <div className="menu">
          <div>
            <div>
              <ul>
                <li className="navItem about__me" onClick={navbarClicked}>
                  <a href="#about__me__p">About Me</a>
                </li>
                <li className="navItem my__projects" onClick={navbarClicked}>
                  <a href="#my__projects_p">Projects</a>
                </li>
                <li className="navItem contact__me" onClick={navbarClicked}>
                  <a href="#contact__me__p">Contact</a>
                </li>
                <li className="resume">
                  <a href=" ">Resume </a>
                  <i className="fas fa-file-download fa-xs"></i>
                </li>
              </ul>
              <p className="copyrights">© 2020 Arie Levental</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function navbarClicked() {
  const toggler = document.getElementsByClassName("toggler")[0];
  toggler.checked = false;
}

export default Navbar;
