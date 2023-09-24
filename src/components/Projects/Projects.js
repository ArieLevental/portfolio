import projectData from "./projectsData.json";
import ProjectCard from "./ProjectCard/ProjectCard";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="projects-section">
      <div className="projects">
        <p id="my__projects_p" />

        <div className="projects-text">
          <h1>My Projects</h1>
          <h3>
            Here is a selected pick of some of my work. Take a look if you got a
            spare time!
          </h3>
        </div>

        <div className="cards">
          {projectData &&
            projectData.map((project) => (
              <ProjectCard
                key={project.name}
                name={project.name}
                description={project.description}
                techList={project.techList}
                demoLink={project.demoLink}
                GitHubLink={project.GitHubLink}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
