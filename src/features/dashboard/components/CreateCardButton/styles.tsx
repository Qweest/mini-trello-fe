import styled from 'styled-components';

import {
  Button as UnstyledButton,
  Card,
  TextArea,
} from '../../../../components';
import { colors, metrics } from '../../../../styles';

export const Wrapper = styled.div`
  margin-top: ${metrics.spacing * 0.5}px;
  cursor: default;
`;

export const Button = styled(UnstyledButton)`
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

export const AreaCard = styled(Card)`
  margin-bottom: ${metrics.spacing * 0.5}px;
`;

export const TitleArea = styled(TextArea)`
  width: 100%;
  resize: vertical;
  background-color: ${colors.none};
  min-height: 55px;
  max-height: 150px;
  border: 0;
`;
