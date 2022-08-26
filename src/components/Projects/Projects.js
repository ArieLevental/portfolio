import React from "react";
import "./Projects.css";
import next from "./next.png";

const Projects = () => {
  return (
    <div className="projects-section">
      <div className="projects">
        <p id="my__projects_p"></p>
        <div className="projects-text">
          <h1>My Projects</h1>
          <h3>
            Here is a selected pick of some of my work. Take a look if you got a
            spare time!
          </h3>
        </div>
        <div className="cards">
          <div className="card eagle-vision">
            <div className="enter-icon">
              <img src={next} alt="" />
            </div>
            <div className="card-bg">
              <div className="card-text">
                <h1>Eagle-Vision</h1>
                <h3>
                  A React Web App for face-detection, using Clarifai's API.
                  Equipped with a database, user authentication, and a ranking
                  system.
                </h3>
                <div className="project-techs">
                  <span>React.js</span>
                  <span>Node.js</span>
                  <span>Express.js</span>
                  <span>PostgreSQL</span>
                  <span>Bcrypt</span>
                  <span>ClarifaiAPI</span>
                  <span>Heroku</span>
                </div>
                <div className="project-buttons">
                  <a
                    href="https://eagle-vision.herokuapp.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                  <a
                    href="https://github.com/ArieLevental/eagle-vision"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="card fruitty">
            <div className="enter-icon">
              <img src={next} alt="" />
            </div>
            <div className="card-bg">
              <div className="card-text">
                <h1>Fruitty</h1>
                <h3>
                  RoboFriends displays cards of robots with image, name and
                  email. It fetches data from an API.
                </h3>
                <div className="project-techs">
                  <span>React.js</span>
                  <span>React-router</span>
                  <span>Redux</span>
                  <span>Node.js</span>
                  <span>Express.js</span>
                  <span>Styled-Components</span>
                  <span>JWToken</span>
                  <span>MongoDB / Mongoose</span>
                </div>
                <div className="project-buttons">
                  <a>Live Demo - Soon</a>
                  <a
                    href="https://github.com/ArieLevental/fruitty"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="card portfolio">
            <div className="enter-icon">
              <img src={next} alt="" />
            </div>
            <div className="card-bg">
              <div className="card-text">
                <h1>Personal Porfolio</h1>
                <h3>
                  My Portfolio, built from scratch to showcase my design
                  abilities and my experience. Full compatibility for desktop,
                  tablet and mobile devices. Much fun.
                </h3>
                <div className="project-techs">
                  <span>React.js</span>
                  <span>Sass</span>
                  <span>Media Queries</span>
                  <span>Firebase</span>
                </div>
                <div className="project-buttons">
                  <a
                    href="https://arielevental.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                  <a
                    href="https://github.com/ArieLevental/portfolio"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="card mcdownloads">
            <div className="enter-icon">
              <img src={next} alt="" />
            </div>
            <div className="card-bg">
              <div className="card-text">
                <h1>McDownload's</h1>
                <h3>
                  A restaurant tool built with React, build your custom burger,
                  get an order summary and confirm your order!
                </h3>
                <div className="project-techs">
                  <span>React.js</span>
                  <span>React Router</span>
                  <span>CSS Modules</span>
                </div>
                <div className="project-buttons">
                  <a href="/">Live Demo - Soon</a>
                  <a
                    href="https://github.com/ArieLevental/McDownloads"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="card robofriends">
            <div className="enter-icon">
              <img src={next} alt="" />
            </div>
            <div className="card-bg">
              <div className="card-text">
                <h1>RoboFriends</h1>
                <h3>
                  RoboFriends displays cards of robots with image, name and
                  email. It fetches data from an API.
                </h3>
                <div className="project-techs">
                  <span>React.js</span>
                  <span>RESTful Api</span>
                  <span>Tachyons</span>
                </div>
                <div className="project-buttons">
                  <a
                    href="https://ArieLevental.github.io/robofriends/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                  <a
                    href="https://github.com/ArieLevental/robofriends"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
