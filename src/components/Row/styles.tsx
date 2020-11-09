import styled from 'styled-components';

import { metrics } from '../../styles';

interface WrapperProps {
  marginMultiplier: number;
  marginLast: boolean;
}

export const Wrapper = styled.div<WrapperProps>`
  display: flex;
  flex-direction: row;

  & > ${({ marginLast }) => (marginLast ? '*' : ':not(:last-child)')} {
    margin-right: ${({ marginMultiplier }) =>
      metrics.spacing * marginMultiplier}px;
  }
`;
