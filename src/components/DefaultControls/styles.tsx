import styled from 'styled-components';

import { colors, metrics } from '../../styles';
import { Button } from '../index';

interface ProceedProps {
  disabled: boolean;
}

export const Proceed = styled(Button)<ProceedProps>`
  padding: ${metrics.spacing * 0.5}px ${metrics.spacing * 0.75}px;
  background-color: ${colors.green};
  &:hover {
    background-color: ${colors.green1};
  }
  &:active {
    background-color: ${colors.grass};
    transition: all 0.2s ease;
  }

  ${({ disabled }) => {
    if (disabled)
      return `
        pointer-events: none;
        opacity: 0.7;
      `;
  }}
`;

export const Close = styled(Button)`
  padding: ${metrics.spacing * 0.25}px;
  color: ${colors.grey};
  background-color: ${colors.none};
  &:hover {
    color: ${colors.black4};
    background-color: ${colors.grey1};
  }
  &:active {
    background-color: ${colors.clay};
    transition: all 0.2s ease;
  }
`;
