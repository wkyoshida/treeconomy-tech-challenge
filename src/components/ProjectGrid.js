import "./ProjectGrid.css";
import ProjectCard from "./ProjectCard";
import { Trans } from "react-i18next";

const ProjectGrid = ({ projects }) => {
  projects.sort((a,b) => b.start_date - a.start_date)

  return (
    <div className="project-grid">
      <div className="project-grid-title">
        <Trans i18nKey="projectList"></Trans>
      </div>
      <ul className="project-grid-gallery">
        { projects.map(project => (
          <li key={project.id}>
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectGrid;
