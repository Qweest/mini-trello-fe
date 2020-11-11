import styled from 'styled-components';

import {
  Button as UnstyledButton,
  Input as UnstyledInput,
  Row as UnstyledRow,
} from '../../../../components';
import { colors, metrics } from '../../../../styles';

interface WrapperProps {
  focused: boolean;
}

export const Wrapper = styled.div<WrapperProps>`
  width: 250px;
  height: fit-content;
  border-radius: 3px;
  background-color: ${colors.whiteA2};
  transition: all 0.5s ease-out;
  padding: ${metrics.spacing * 0.25}px;
  cursor: pointer;
  ${({ focused }) =>
    focused
      ? `
        background-color: ${colors.grey2};
        cursor: auto;   
      `
      : `
        &:hover {
          background-color: ${colors.whiteA1};
        }
  `}
`;

export const Button = styled(UnstyledButton)`
  padding: ${metrics.spacing * 0.5}px;
  background-color: ${colors.none};
`;

export const Input = styled(UnstyledInput)`
  width: 100%;
  background-color: ${colors.white};
  padding: ${metrics.spacing * 0.5}px;
`;

export const Row = styled(UnstyledRow)`
  margin-top: ${metrics.spacing * 0.25}px;
`;

export const Add = styled(UnstyledButton)`
  padding: ${metrics.spacing * 0.5}px ${metrics.spacing * 0.75}px;
  background-color: ${colors.green};
  &:hover {
    background-color: ${colors.green1};
  }
`;

export const Cancel = styled(UnstyledButton)`
  padding: ${metrics.spacing * 0.25}px;
  color: ${colors.grey};
  background-color: ${colors.none};
  &:hover {
    color: ${colors.black4};
    background-color: ${colors.grey1};
  }
`;
