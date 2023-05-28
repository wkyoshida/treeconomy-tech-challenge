import "./App.css";
import ProjectGrid from "./components/ProjectGrid";
import useFetchData from "./hooks/useFetchData";
import { Loading, Error } from "./components/UtilMessages";

const App = () => {
  const {
    data: projectsData, 
    error: projectsError,
    loading: projectsLoading
  } = useFetchData(process.env.REACT_APP_PROJECTS_DATASOURCE_URL);

  if (projectsError) {
    console.error(projectsError);
  }

  return (
    <>
      <div className="app-header">
        Treeconomy - {process.env.REACT_APP_APPLICANT_NAME}
      </div>
      { projectsLoading &&
        <Loading
          loadingMessage="projectsLoading"
          className="util-message"
        />
      }
      { (projectsError && !projectsLoading && !projectsData) &&
        <Error
          errorMessage="projectsError"
          className="util-message"
        />
      }
      { (projectsData && !projectsLoading) &&
        <ProjectGrid
          projects={projectsData}
        />
      }
    </>
  );
};

export default App;
