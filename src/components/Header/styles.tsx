import styled from 'styled-components';
import { FaTrello } from 'react-icons/fa';

import { metrics, colors } from '../../styles';

interface ContentProps {
  position: 'left' | 'right';
}

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${colors.cerulean};
  padding: ${metrics.spacing * 0.25}px;
`;

export const Content = styled.div<ContentProps>`
  display: flex;
  flex: 1;
  flex-direction: row;
  ${({ position }) => {
    return position === 'right'
      ? 'justify-content: flex-end'
      : 'justify-content: flex-start';
  }}
`;

export const Button = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${metrics.spacing * 2}px;
  border-radius: ${metrics.spacing * 0.25}px;
  background-color: hsla(0, 0%, 100%, 0.3);
  border: none;
  margin-right: ${metrics.spacing * 0.25}px;
  cursor: pointer;
  &:hover {
    background-color: hsla(0, 0%, 100%, 0.2);
  }
  &:focus {
    outline: none;
    background-color: hsla(0, 0%, 100%, 0.1);
  }
  span {
    margin-left: ${metrics.spacing * 0.5}px;
    color: ${colors.white};
    font-size: ${metrics.fontSize.medium}px;
    font-weight: 700;
  }
`;

export const MemberButton = styled.div`
  display: flex;
  height: 32px;
  width: 32px;
  border-radius: 16px;
  background-color: ${colors.blue1};
  color: ${colors.white};
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const TrelloLogo = styled(FaTrello)`
  cursor: pointer;
  &:hover {
    color: ${colors.white} !important;
  }
`;
