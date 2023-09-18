import React from 'react';
import { NavLink } from "react-router-dom";
import * as Styled from './VerticalNav.styled';

export const VerticalNav = () => {
  return (
    <Styled.VerticalNav>
      <Styled.NavUl>
        <Styled.NavLi>
          <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="projects">Projects</NavLink>
        </Styled.NavLi>
        <Styled.NavLi>
          <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="diagnosis">Diagnosis</NavLink>
        </Styled.NavLi>
        <Styled.NavLi>
          <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="records">Records</NavLink>
        </Styled.NavLi>
        <Styled.NavLi>
          <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="settings">Settings</NavLink>
        </Styled.NavLi>
      </Styled.NavUl>
    </Styled.VerticalNav>
  )
}
