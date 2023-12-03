import { styled } from 'styled-components';

export const VerticalNav = styled.nav`
  width: fit-content;
`;

export const NavUl = styled.ul`
  list-style: none;
  margin: 0;
  padding-left: 2rem;
  padding-right: 3rem;
  padding-top: 3rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const NavLi = styled.li`
  a {
    color: inherit;
    &.active {
      color: ${({ theme }) => theme.navActive}
    }
  }
`;