import { useState } from "react";
import SideBar from "./components/SideBar.jsx";
import NewProject from "./components/NewProject.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import ProjectSelected from "./components/ProjectSelected.jsx";

function App() {
  
  const [ projectsState, setProjectsState ] = useState({
    selectedProjectID: undefined,
    projects: [],
  });

  function handleSelectProject(id) {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectID: id
      };
    });
  }

  function handleStartAddProject() {
    setProjectsState(prevState => {
      return {
      ...prevState,
      selectedProjectID: null,
    }});
  }

  function handleAddProject(projectData) {
    setProjectsState(prevState => {
      const newProject = {
        ...projectData,
        id: Math.random()
      };

      return {
        ...prevState,
        projects: [...prevState.projects, newProject],
        selectedProjectID: undefined,
      };
    });
  }

  function handleCancelProject() {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectID: undefined,
      };
    });
  }

  let selectedProject = projectsState.projects.find(project => project.id === projectsState.selectedProjectID);
  let content = < ProjectSelected project={selectedProject} />;

  if (projectsState.selectedProjectID === null) {
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancelProject} />;
  } else if (projectsState.selectedProjectID === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  } else {

  }

  return (
    <main className="h-screen my-2 flex gap-8">
      <SideBar 
      onStartAddProject={handleStartAddProject} 
      projects={projectsState.projects} 
      onSelectProject={handleSelectProject} />
      { content }
    </main>
  );
}

export default App;
