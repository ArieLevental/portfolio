import PropTypes from "prop-types";
import "./ProjectCard.css";

const ProjectCard = ({ name, description, techList, demoLink, GitHubLink }) => {
  return (
    <div className={`card ${name.toLowerCase()}`}>
      <div className="enter-icon">
        <img src="/assets/images/next.png" alt="" />
      </div>
      <div className="card-bg">
        <div className="card-text">
          <h1>{name}</h1>
          <h3>{description}</h3>
          <div className="project-techs">
            {techList.map((tech) => (
              <span>{tech}</span>
            ))}
          </div>
          <div className="project-buttons">
            {demoLink && (
              <a href={demoLink} target="_blank" rel="noopener noreferrer">
                Live Demo
              </a>
            )}
            <a href={GitHubLink} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  techList: PropTypes.arrayOf(PropTypes.string).isRequired,
  demoLink: PropTypes.string.isRequired,
  GitHubLink: PropTypes.string.isRequired,
};

export default ProjectCard;
