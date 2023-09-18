import React from 'react'

export interface ProjectDashboardProps {
  title: string;
}

export const ProjectDashboard: React.FC<ProjectDashboardProps> = ({ title }) => {
  return (
    <div>{title}</div>
  )
}
