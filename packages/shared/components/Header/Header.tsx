// import { useDarkMode } from 'shared/hooks/useDarkMode';
import { useContext } from "react";
import { DarkModeContext } from 'shared/context/DarkMode.context'
import { ToggleSwitch } from 'shared/components/ToggleSwitch';
import * as Styled from './Header.styled';

export const Header = () => {
  const { theme, themeToggler } = useContext(DarkModeContext);

  return (
    <Styled.Header>
      <Styled.ServiceName>
        MaxSpeed Insights
      </Styled.ServiceName>
      <ToggleSwitch
        label="DarkMode"
        onClick={themeToggler}
        toggled={theme === 'dark'}
      />
    </Styled.Header>
  )
}
