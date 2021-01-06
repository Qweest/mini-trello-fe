import styled from 'styled-components';

import {
  Button as UnstyledButton,
  Input as UnstyledInput,
} from '../../../../components';
import { colors, metrics } from '../../../../styles';

export const Wrapper = styled.div`
  min-width: 250px;
  box-sizing: border-box;
  height: fit-content;
`;

export const Button = styled(UnstyledButton)`
  padding: ${metrics.spacing * 0.75}px;
  color: ${colors.white};
  background-color: ${colors.whiteA2};
  &:hover {
    background-color: ${colors.whiteA1};
  }
  &:active {
    background-color: ${colors.whiteA};
  }
`;

export const InputBlockWrapper = styled.div`
  padding: ${metrics.spacing * 0.25}px;
  border-radius: 3px;
  background-color: ${colors.grey2};
`;

export const Input = styled(UnstyledInput)`
  width: 100%;
  padding: ${metrics.spacing * 0.5}px;
  margin-bottom: ${metrics.spacing * 0.25}px;
  background-color: ${colors.white};
`;
