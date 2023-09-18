import React from 'react';
import { Outlet } from "react-router-dom";
import * as Styled from './Projects.styled';

export interface Project {
  id: string;
  title: string;
}

export interface ProjectsProps {
  projects: Project[];
}

export const Projects: React.FC<ProjectsProps> = ({ projects }) => {
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
        <select id="selectProject">
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
