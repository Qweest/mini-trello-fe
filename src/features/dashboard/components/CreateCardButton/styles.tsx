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
  padding: ${metrics.spacing * 0.5}px;
  background-color: ${colors.none};
  color: ${colors.grey};
  &:hover {
    background-color: ${colors.grey1};
    color: ${colors.black2};
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
  border: 0;
`;
