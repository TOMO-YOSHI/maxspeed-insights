import React from 'react';
import { useContext } from "react";
import { DarkModeContext } from 'shared/context/DarkMode.context'
import { ToggleSwitch } from 'shared/components/ToggleSwitch';
import { BrandLogo } from '../../assets/BrandLogo';
import { lightTheme, darkTheme } from '../../styles/Themes';
import * as Styled from './Header.styled';

export const Header = () => {
  const { theme, themeToggler } = useContext(DarkModeContext);

  return (
    <Styled.Header>
      <Styled.LogoContainer>
        <BrandLogo textColor={theme === 'dark' ? darkTheme.text : lightTheme.text } />
      </Styled.LogoContainer>
      <ToggleSwitch
        label="DarkMode"
        onClick={themeToggler}
        toggled={theme === 'dark'}
      />
    </Styled.Header>
  )
}
