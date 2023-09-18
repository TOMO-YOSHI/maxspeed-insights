import { styled } from 'styled-components';
import { CommonShadow } from '../../styles/Common.styled';

export const headerHeight = '4rem';

export const Header = styled.header`
  height: ${headerHeight};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 2rem;
  padding-right: 2rem;
  ${CommonShadow}
`;

export const ServiceName = styled.p``;