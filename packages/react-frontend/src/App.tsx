import { ThemeProvider } from "styled-components";
import { useContext } from "react";
import { DarkModeContext } from 'shared/context/DarkMode.context';
import { GlobalStyles } from "shared/styles/Globalstyles";
import { lightTheme, darkTheme } from "shared/styles/Themes";
import { Routes, Route } from "react-router-dom";
import { Layout } from 'shared/components/Layout';
import { Settings } from './pages/Settings';

function App() {
  const { theme } = useContext(DarkModeContext);
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
        <GlobalStyles />
        <Layout>
          <Routes>
            <Route path="/" element={<>Home</>} />
            <Route path="projects" element={<>projects</>} />
            <Route path="diagnosis" element={<>diagnosis</>} />
            <Route path="records" element={<>records</>} />
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
