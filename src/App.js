import "./App.css";
import ProjectGrid from "./components/ProjectGrid";
import useFetchData from "./hooks/useFetchData";

const App = () => {
  const [projectsData] = useFetchData(process.env.REACT_APP_PROJECTS_DATASOURCE_URL);

  return (
    <>
      <div className="app-header">
        Treeconomy - {process.env.REACT_APP_APPLICANT_NAME}
      </div>
      { projectsData && <ProjectGrid projects={projectsData} /> }
    </>
  );
};

export default App;
