import "./ProjectCard.css";
import { useState } from "react";
import { Trans } from "react-i18next";

const ProjectCard = ({ project }) => {
  const [purchased, setPurchased] = useState(false);
  const projectStartDate = new Date(project.start_date).toLocaleDateString(
    "en-GB", { year: "numeric", month: "long", day: "numeric" }
  );

  function handleToggle() {
    setPurchased(!purchased);
  }

  return (
    <div className="project-card">
      <img className="project-image" src={project.image} alt={project.name} />
      <div className="project-container">
        <div className="project-name">{project.name}</div>
        <div className="project-available-credits">{project.available_credits} <Trans i18nKey="credits"></Trans></div>          
        <div className="project-start-date">{projectStartDate}</div>
        <PurchaseButton toggleState={purchased} onClick={handleToggle} />
      </div>
    </div>
  );
};

const PurchaseButton = ({ toggleState, onClick }) => {
  const purchasedState = toggleState ? "purchased" : "purchase"

  return (
    <>
      <button className={`project-purchase-button ${purchasedState}`} onClick={onClick}>
        <Trans i18nKey={purchasedState}></Trans>
      </button>
    </>
  );
};

export default ProjectCard;
