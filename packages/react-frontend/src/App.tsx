import { ThemeProvider } from "styled-components";
import { useContext } from "react";
import { DarkModeContext } from 'shared/context/DarkMode.context';
import { GlobalStyles } from "shared/styles/Globalstyles";
import { lightTheme, darkTheme } from "shared/styles/Themes";
import { Routes, Route } from "react-router-dom";
import { Layout } from 'shared/components/Layout';
import { Home } from './pages/Home';
import { Projects } from './pages/Projects';
import { Diagnosis } from './pages/Diagnosis';
import { Records } from './pages/Records';
import { Settings } from './pages/Settings';
import { ProjectDashboard } from 'shared/components/ProjectDashboard';

function App() {
  const { theme } = useContext(DarkModeContext);
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  const projects = [
    {
      id: "1",
      title: "Cnadian Train Vacation",
      url: "https://canadiantrainvacations.com/",
      paths: ["/", "trips", "blog"]
    },
    {
      id: "2",
      title: "Fresh Tracks Canada",
      url: "https://freshtrackscanada.com/",
      paths: ["/", "about-us", "reviews"]
    }
  ]

  return (
    <ThemeProvider theme={themeMode}>
        <GlobalStyles />
        <Layout>
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="projects" element={<Projects projects={projects} />} />
          {/* <Route path="projects" element={<Projects projects={projects} />}>
              {
                projects.map(project => (
                  <Route path="profile" element={<ProjectDashboard title={project.title} />} />
                ))
              }
            </Route> */}
            <Route path="diagnosis" element={<Diagnosis />} />
            <Route path="records" element={<Records />} />
            <Route path="settings" element={<Settings />}>
              <Route path="profile" element={<>profile</>} />
              <Route path="*" element={<>Page Not Found</>} />
            </Route>
            <Route path="*" element={<>Page Not Found</>} />
          </Routes>
        </Layout>
    </ThemeProvider>
  )
}

export default App
