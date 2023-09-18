import React, { useContext, useState, useEffect } from "react";
import { DarkModeContext } from 'shared/context/DarkMode.context'
import { ToggleSwitch } from 'shared/components/ToggleSwitch';
import { BrandLogo } from '../../assets/BrandLogo';
import { CharactorLogo } from '../../assets/CharactorLogo';
import { lightTheme, darkTheme } from '../../styles/Themes';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { VerticalNav } from '../VerticalNav';
import { useLocation } from "react-router-dom";

import * as Styled from './Header.styled';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, themeToggler } = useContext(DarkModeContext);

  const menuIconClickHandler = () => {
    setIsMenuOpen(prev => !prev)
  }

  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <Styled.Header>
      <Styled.MenuIconContainer role='button' onClick={menuIconClickHandler}>
        <FontAwesomeIcon icon={isMenuOpen ? faWindowClose : faBars} />
      </Styled.MenuIconContainer>

      <Styled.BrandLogoContainer>
        <Link to='/' >
            <BrandLogo textColor={theme === 'dark' ? darkTheme.text : lightTheme.text} />
        </Link>
      </Styled.BrandLogoContainer>

      <Styled.CharactorContainer>
        <Link to='/' >
          <CharactorLogo />
        </Link>
      </Styled.CharactorContainer>

      <ToggleSwitch
        label="DarkMode"
        onClick={themeToggler}
        toggled={theme === 'dark'}
      />
      <Styled.PopUpMenu isOpen={isMenuOpen} onClick={menuIconClickHandler}>
          <VerticalNav />
      </Styled.PopUpMenu>
    </Styled.Header>
  )
}
