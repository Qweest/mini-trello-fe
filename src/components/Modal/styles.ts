import styled from 'styled-components';

import { colors, metrics } from '../../styles';
import { Button, Card } from '../index';

export const Backdrop = styled.div`
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: auto;
  background-color: ${colors.blackA};
`;

export const Wrapper = styled(Card)`
  position: relative;
  padding: ${metrics.spacing * 1.5}px;
  background-color: ${colors.grey4};
`;

export const CloseIcon = styled(Button)`
  position: absolute;
  top: ${metrics.spacing}px;
  right: ${metrics.spacing}px;
  padding: ${metrics.spacing * 0.25}px;
  border-radius: 50%;
  background-color: ${colors.grey3};
  color: ${colors.grey};
  &:hover {
    background-color: ${colors.grey2};
    color: ${colors.black4};
  }
  &:active {
    background-color: ${colors.grey1};
  }
`;
