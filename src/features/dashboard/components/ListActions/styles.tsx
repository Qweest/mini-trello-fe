import styled from 'styled-components';
import { HiOutlineX } from 'react-icons/hi';

import { Button, Card } from '../../../../components';
import { colors, metrics } from '../../../../styles';

export interface WrapperProps {
  opened: boolean;
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
  padding-top: ${metrics.spacing}px;
  top: ${({ opened }) => (opened ? -metrics.spacing : -300)}px;
  transition: all 0.25s cubic-bezier(0.195, 0.885, 0.32, 1.275);
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
  padding: ${metrics.spacing}px;
  font-size: ${metrics.fontSize.medium}px;
  color: ${colors.grey};
`;

export const CloseIcon = styled(HiOutlineX)`
  padding: ${metrics.spacing * 0.25}px;
  border-radius: 50%;
  cursor: pointer;
  color: ${colors.grey};
  &:hover {
    background-color: ${colors.grey2};
    color: ${colors.black4};
  }
`;

export const Separator = styled.div`
  border-top-width: 1px;
  border-top-color: ${colors.grey2};
  border-top-style: solid;
  margin: 0 ${metrics.spacing * 0.25}px;
`;

export const ActionsWrapper = styled.div`
  margin: ${metrics.spacing * 0.5}px 0;
`;

export const Action = styled(Button)`
  flex: 1;
  padding: ${metrics.spacing * 0.5}px;
  border-radius: 0;
  background-color: ${colors.white};
  color: ${colors.black2};
  &:hover {
    background-color: ${colors.grey2};
  }
`;
