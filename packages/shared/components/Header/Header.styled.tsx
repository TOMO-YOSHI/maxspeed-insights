import { styled, keyframes } from 'styled-components';
import { CommonShadow } from '../../styles/Common.styled';

export const headerHeight = '4rem';

const slideInFromLeft = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
`;

const slideOutToLeft = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
`;

export const Header = styled.header`
  height: ${headerHeight};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 1rem;
  padding-right: 1rem;
  @media (min-width: 768px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }

  ${CommonShadow}
`;

export const LogoContainer = styled.div`
  width: 200px;
`;
export const BrandLogoContainer = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: block;
    width: 200px;
  }
`;

export const CharactorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  padding-left: 1rem;

  width: 40px;
  div {
    height: 32px;
  }
  svg {
    width: 40px;
    height: 32px;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

export const MenuIconContainer = styled.div`
  height: 1rem;
  width: 1rem;
  display: flex;
  cursor: pointer;
  z-index: 100;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const PopUpMenu = styled.div<{isOpen: boolean}>`
  position: absolute;
  top: 0;
  left: 0;
  /* width: 100%; */
  height: calc(100% - 20px);
  width: 160px;
  padding-top: 20px;
  background-color: ${({ theme }) => theme.body};
  ${CommonShadow}

  @media (min-width: 768px) {
    display: none;
  }

  /* animation: ${slideInFromLeft} 0.5s forwards; */
  animation: 
  ${props => props.isOpen && slideInFromLeft} 0.3s forwards;
  display: ${props => !props.isOpen && 'none'};
`;