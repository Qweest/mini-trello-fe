import styled from 'styled-components';

import { colors, metrics } from '../../styles';
import { Button } from '../index';

interface ProceedProps {
  disabled: boolean;
}

export const Proceed = styled(Button)<ProceedProps>`
  color: ${colors.white};
  background-color: ${colors.green};
  &:hover {
    background-color: ${colors.green1};
  }
  &:active {
    background-color: ${colors.grass};
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
  background-color: ${colors.none};
  color: ${colors.grey};
  &:hover {
    background-color: ${colors.grey1};
    color: ${colors.black4};
  }
  &:active {
    background-color: ${colors.clay};
  }
`;
