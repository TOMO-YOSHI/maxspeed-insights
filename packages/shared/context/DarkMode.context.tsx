import { createContext, useState, useEffect } from 'react';

type Mode = 'light' | 'dark';

interface DarkModeContextInterface {
  theme: Mode;
  themeToggler: () => void;
}

const initialCotext: DarkModeContextInterface = {
  theme: 'light',
  themeToggler: () => console.log('Initiating DarkMode context...')
};

export const DarkModeContext = createContext<DarkModeContextInterface>(initialCotext);

export const DarkModeContextProvider = ({ children }: { children: JSX.Element }) => {
  const [theme, setTheme] = useState<Mode>('light');

  const setMode = (mode: Mode) => {
    window.localStorage.setItem('theme', mode);
    setTheme(mode);
  };

  const themeToggler = () => {
    theme === 'light' ? setMode('dark') : setMode('light');
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme') as Mode;
    localTheme && setTheme(localTheme);
  }, []);

  return (
    <DarkModeContext.Provider value={{ theme, themeToggler }}>
      {children}
    </DarkModeContext.Provider>
  );
};
