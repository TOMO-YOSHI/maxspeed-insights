import React, { useState } from 'react';
// import { Outlet } from "react-router-dom";
import { Button } from 'shared/ui/components/Button';
import * as Styled from './Projects.styled';

export interface Project {
  id: string;
  title: string;
  url: string;
  paths: string[]
}

export interface ProjectsProps {
  projects: Project[];
}

const initState: Project = {
  id: "",
  title: "",
  url: "",
  paths: []
};

export const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  const [ selectedProject, setSelectedProject ] = useState<Project>(initState);

  const selectHandler = (event: React.ChangeEvent<HTMLSelectElement> ) => {
    event.preventDefault();
    setSelectedProject(event.target.value ? projects.filter((pro) => pro.id === event.target.value)[0] : initState);
  }

  return (
    <>
      <h1>Projects</h1>
      <Styled.ActionContainer>
        <select id="selectProject" onChange={selectHandler}>
          <option value={""} selected={true}>
            New Project
          </option>
          {
            projects.map((project) => (
              <option value={project.id}>{project.title}</option>
            ))
          }
        </select>
      </Styled.ActionContainer>
      <div>
        <Styled.Form>
          <Styled.Fieldset>
            <Styled.Lable htmlFor="title">Title:&nbsp;
              <Styled.Input
                type="text"
                id="title"
                name="title"
                value={selectedProject.title}
                {...(selectedProject.title ? {disabled: true} : {})}
              />
            </Styled.Lable>
            <Styled.Lable htmlFor="url">URL:&nbsp;
              <Styled.Input
                type="text"
                id="url"
                name="url"
                value={selectedProject.url}
                {...(selectedProject.url ? {disabled: true} : {})}
              />
            </Styled.Lable>
          </Styled.Fieldset>
          <Styled.ButtonsContainer>
            {
              !selectedProject.title &&
              <Button
                onClick={(ev) => console.log(ev)}
                disabled={true}
              >
                Create New Project
              </Button>
            }
            {
              !!selectedProject.title &&
              <Button
                onClick={(ev) => console.log(ev)}
              >
                Delete Existing Project
              </Button>
            }
          </Styled.ButtonsContainer>
        </Styled.Form>
      </div>
      {/* <Outlet /> */}
    </>
  )
}
