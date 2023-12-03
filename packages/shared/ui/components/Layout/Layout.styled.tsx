import { styled } from 'styled-components';
import { headerHeight } from '../Header/Header.styled';
import { footerHeight } from '../Footer/Footer.styled';
import { CommonMargin } from '../../../styles/Common.styled';

export const Layout = styled.div`
`;

export const CotentsGrid = styled.div`
  ${CommonMargin}

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: auto 1fr;
  }
`;

export const VerticalNavWrapper = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`;

export const Main = styled.main`
  padding-top: 2rem;
  padding-bottom: 2rem;
  min-height: calc(100vh - ${headerHeight} - ${footerHeight} - 4rem);
`;