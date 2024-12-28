import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import SelectedProject from "./components/SelectedProject";
import Sidebar from "./components/Sidebar";
import { useState } from "react";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: []
  });

  function handleSelectProject(projectId) {
    setProjectsState((prevState => {
      return {
        ...prevState,
        selectedProjectId: projectId
      }
    }))
  }

  function handleStartAddProject() {
    setProjectsState((prevState => {
      return {
        ...prevState,
        selectedProjectId: null
      }
    }))
  }

  function handleCancelAddProject() {
    setProjectsState((prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined
      }
    }))
  }

  function handleAddProject(projectData) {
    setProjectsState((prevState => {
      const projectId = Math.random();
      const newProject = {
        ...projectData,
        id: projectId
      }
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject]
      }
    }))
  }

  function handleDeleteProject() {
    setProjectsState((prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter(project => project.id !== projectsState.selectedProjectId)
      }
    }))
  }


  const selectedProject = projectsState.projects.find(project => project.id === projectsState.selectedProjectId);

  let content = <SelectedProject project={selectedProject} onDelete={handleDeleteProject} />;

  if (projectsState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />;
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  return (
    <>
      <div className="h-screen my-8 flex gap-8">
        <Sidebar
         onStartAddProject={handleStartAddProject}
         projects={projectsState.projects} 
         onSelectProject={handleSelectProject}
         />
        {content}
      </div>
    </>
  );
}

export default App;
