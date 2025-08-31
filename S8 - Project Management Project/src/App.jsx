import { useState } from "react";
import SideBar from "./components/SideBar.jsx";
import NewProject from "./components/NewProject.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";

function App() {
  const [ projectsState, setProjectsState ] = useState({
    selectedProjectID: undefined,
    projects: [],
  });

  function handleStartAddProject() {
    setProjectsState(prevState => {
      return {
      ...prevState,
      selectedProjectID: null,
    }});
  }

  let content;

  if (projectsState.selectedProjectID === null) {
    content = <NewProject />;
  } else if (projectsState.selectedProjectID === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  return (
    <main className="h-screen my-2 flex gap-8">
      <SideBar onStartAddProject={handleStartAddProject} />
      { content }
    </main>
  );
}

export default App;
