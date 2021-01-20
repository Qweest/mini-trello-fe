import styled from 'styled-components';

import { colors, metrics } from '../../styles';
import Button from '../Button';
import TextArea from '../TextArea';
import DefaultControls from '../DefaultControls';

export interface Props {
  focused: boolean;
}

export const Wrapper = styled.div`
  flex: 1;
  position: relative;
`;

export const InputCover = styled(Button)<Props>`
  display: ${({ focused }) => (focused ? 'none' : 'block')};
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  background-color: ${colors.none};
  &:hover {
    background-color: ${colors.blackA5};
  }
  &:active {
    background-color: ${colors.blackA4};
  }
`;

export const InputArea = styled(TextArea)`
  width: 100%;
  resize: none;
  padding: ${metrics.spacing * 0.25}px ${metrics.spacing * 0.5}px;
  background-color: ${colors.none};
  &:focus {
    background-color: ${colors.white};
  }
`;

export const Controls = styled(DefaultControls)`
  margin-top: ${metrics.spacing * 0.5}px;
`;
