import React from 'react';
import './Projects.css';

const Projects = () => {
    return (
        <div className="projects">
          <p id="my__projects_p"></p>
            <h1>My Projects</h1>
            <div className="cards">
            <div className="card">
            <div className="card-image"></div>
            <div className="card-text">
              <span className="date">April 2020</span>
              <h2>Eagle-Eye</h2>
              <p id="project_1st">A React Web App for face-detection, using Clarifai's API. Equipped with a database, user authentication, and a ranking system.</p> 
              <p id="project_2nd"><span>Used:</span> React.js, Node.js, Express.js, PostgreSQL, ClarifaiAPI, Bcrypt</p>
            </div>
            <div className="card-links">
              <div className="link">
                <div className="value"><i className="fab fa-github card__icons"></i></div>
                <div className="type">See Code</div>
              </div>
              <div className="link border">
                <div className="value"><i className="fas fa-feather-alt card__icons"></i></div>
                <div className="type">Live Demo</div>
              </div>
            </div>
          </div>

          <div className="card">
          <div className="card-image2"></div>
          <div className="card-text">
            <span className="date">February 2020</span>
            <h2>RoboFriends</h2>
            <p id="project_1st">RoboFriends displays cards of robots with image, name and email. It fetches data from an API.</p>
            <p id="project_2nd"><span>Used: </span> React.js, RESTful Api, Tachyons</p>
          </div>
          <div className="card-links">
            <div className="link">
              <div className="value"><i className="fab fa-github card__icons"></i></div>
              <div className="type">See Code</div>
            </div>
            <div className="link border">
              <div className="value"><i className="fas fa-feather-alt card__icons"></i></div>
              <div className="type">Live Demo</div>
            </div>
          </div>
        </div>
            </div>
        </div>
    );
}

export default Projects;