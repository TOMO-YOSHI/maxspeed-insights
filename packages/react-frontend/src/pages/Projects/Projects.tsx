import React, { useState } from 'react';
import { Outlet } from "react-router-dom";
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

export const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  const [ selectedProject, setSelectedProject ] = useState<string>('newProject');

  const selectHandler = (event: React.ChangeEvent<HTMLSelectElement> ) => {
    event.preventDefault();
    setSelectedProject(event.target.value);
  }

  return (
    <>
      <h1>Projects</h1>
      {/* <nav>
        <ul>
          {
            projects.map((project) => (
              <li>{project.title}</li>
            ))
          }
        </ul>
      </nav> */}
      {/* <label htmlFor="selectProject">Select your project: </label> */}
      <Styled.ActionContainer>
        <select id="selectProject" onChange={selectHandler}>
          <option value="newProject" selected={true}>
            New Project
          </option>
          {
            projects.map((project) => (
              <option value={project.id}>{project.title}</option>
            ))
          }
        </select>
      </Styled.ActionContainer>
      <Outlet />
    </>
  )
}
