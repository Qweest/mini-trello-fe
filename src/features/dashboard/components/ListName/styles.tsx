import styled from 'styled-components';

import { Input as UnstyledInput } from '../../../../components';
import { colors, metrics } from '../../../../styles';

export interface Props {
  focused: boolean;
}

export const Wrapper = styled.div`
  flex: 1;
  position: relative;
`;

export const InputCover = styled.div<Props>`
  display: ${({ focused }) => (focused ? 'none' : 'block')};
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 3px;
  background-color: ${colors.none};
  &:hover {
    background-color: ${colors.blackA4};
  }
`;

export const Input = styled(UnstyledInput)`
  width: 100%;
  padding: ${metrics.spacing * 0.25}px ${metrics.spacing * 0.5}px;
  background-color: ${colors.none};
  &:focus {
    background-color: ${colors.white};
  }
`;
