import { css } from 'styled-components';

export const CommonMargin = css`
  max-width: 1024px;
  margin-left: 1rem;
  margin-right: 1rem;
  @media (min-width: 768px) {
    margin-left: 2rem;
    margin-right: 2rem;
  }
  @media (min-width: 1024px) {
    margin-left: 3rem;
    margin-right: 3rem;
  }
  @media (min-width: 1280px) {
    margin-left: auto;
    margin-right: auto;
  }
`;

export const CommonShadow = css`
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;