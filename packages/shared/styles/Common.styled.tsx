import { css } from 'styled-components';
import * as consts from './consts';

export const CommonMargin = css`
  max-width: 1024px;
  margin-left: ${consts.spacing.md};
  margin-right: ${consts.spacing.md};
  @media (min-width: ${consts.breakpoints.md}) {
    margin-left: ${consts.spacing.xl};
    margin-right: ${consts.spacing.xl};
  }
  @media (min-width: ${consts.breakpoints.lg}) {
    margin-left: ${consts.spacing.xxl};
    margin-right: ${consts.spacing.xxl};
  }
  @media (min-width: ${consts.breakpoints.xl}) {
    margin-left: auto;
    margin-right: auto;
  }
`;

export const CommonShadow = css`
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;