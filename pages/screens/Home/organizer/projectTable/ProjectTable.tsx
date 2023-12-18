import React, { useLayoutEffect, useRef, useState } from "react";
import ProjectListHeader from "../../molecules/projectListHeader/ProjectListHeader";
import ProjectSingleRender from "../../molecules/projectSingleRender/ProjectSingleRender";
import ProjectCreationForm from "../../../../components/organizer/projectCreationForm/ProjectCreationForm";
import useGetAllProjects from "../../hook/useGetAllProjects";
import Project from "../../../Project/Project";

const ProjectTable = () => {
  const [showCreationForm, setShoeCreationForm] = useState(false);
  const [projects, setProjects] = useState([]);
  const [showProjectDetails, setShowProjectDetails] = useState(false);
  const [getAllProjects, loading] = useGetAllProjects();
  const [selectedP,setSelectedP] = useState({})

  const projectRef = useRef();

  useLayoutEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await getAllProjects();
    if (data.length !== 0) {
      setProjects(data);
    }
  };
  const newProject = () => {
    setShoeCreationForm(true);
  };

  const closeProjectCreationForm = (data) => {
    if (data) {
      let newData = projects;
      newData.unshift(data?.data);
      setProjects(newData);
    }
    setShoeCreationForm(false);
  };

  const selectProject = (data) => {
    setSelectedP(data)
    setShowProjectDetails(true)
    setTimeout(() => {
      projectRef.current.loadData(data)
    }, 100);
  };

  const closeProjectModel =()=>{
    getData()
    setShowProjectDetails(false)
  }
  return (
    <div className="w-full h-full">
      <ProjectListHeader newProject={newProject} />
      <div className="w-full p-10 px-48">
        <p className="text-lg font-bold text-primary">All Projects</p>
      </div>
      <div className="overflow-scroll h-3/4">
        {projects.map((x: any) => (
          <ProjectSingleRender data={x} selectProject={selectProject} />
        ))}
      </div>
      {showCreationForm && (
        <ProjectCreationForm closeModel={closeProjectCreationForm} />
      )}

      {showProjectDetails && <Project closeModel={closeProjectModel} ref={projectRef} selectedP={selectedP}/>}
    </div>
  );
};

export default ProjectTable;
