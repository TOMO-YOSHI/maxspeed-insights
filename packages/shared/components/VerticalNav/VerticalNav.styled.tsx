import { styled } from 'styled-components';

export const VerticalNav = styled.nav`
  /* background-color: cyan; */
`;

export const NavUl = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const NavLi = styled.li`
  a {
    color: inherit;
  }
`;