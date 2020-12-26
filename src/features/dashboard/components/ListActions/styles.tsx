import styled from 'styled-components';

import { Button, Card } from '../../../../components';
import { colors, metrics } from '../../../../styles';

export interface WrapperProps {
  opened: boolean;
}

export interface ActionProps {
  danger?: boolean;
}

export const Wrapper = styled.div<WrapperProps>`
  display: flex;
  justify-content: center;
  position: absolute;
  z-index: 99;
  overflow: hidden;
  visibility: ${({ opened }) => (opened ? 'visible' : 'hidden')};
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
`;

export const Content = styled(Card)<WrapperProps>`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 95%;
  padding: 0;
  padding-bottom: ${metrics.spacing * 0.5}px;
  padding-top: ${metrics.spacing * 2}px;
  top: ${({ opened }) => (opened ? -metrics.spacing * 2 : -350)}px;
  transition: all 0.25s cubic-bezier(0.195, 0.585, 0.32, 1.275);
  box-shadow: 0 5px 25px ${colors.blackA};
  box-sizing: border-box;
  border-radius: 0;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 ${metrics.spacing}px;
  padding-top: ${metrics.spacing * 0.5}px;
  font-size: ${metrics.fontSize.medium}px;
  color: ${colors.grey};
`;

export const CloseIcon = styled(Button)`
  padding: ${metrics.spacing * 0.25}px;
  border-radius: 50%;
  background-color: ${colors.none};
  color: ${colors.grey};
  &:hover {
    background-color: ${colors.grey2};
    color: ${colors.black4};
  }
  &:active {
    background-color: ${colors.grey1};
  }
`;

export const Separator = styled.div`
  border-top-width: 1px;
  border-top-color: ${colors.grey2};
  border-top-style: solid;
  margin: ${metrics.spacing * 0.5}px;
`;

export const Action = styled(Button)<ActionProps>`
  border-radius: 0;
  background-color: ${colors.none};
  color: ${({ danger = false }) => (danger ? colors.danger : colors.black4)};
  &:hover {
    background-color: ${colors.grey2};
  }
  &:active {
    background-color: ${colors.grey1};
  }
`;
