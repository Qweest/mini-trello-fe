import styled, { css } from 'styled-components';

import { Card, TextArea } from '../../../../components';
import { colors, metrics } from '../../../../styles';
import { CARD_RENAME_TIMEOUT } from '../../constants';

interface WrapperProps {
  isDragging: boolean;
  focused: boolean;
}

const longPressStyles = css`
  &:hover {
    background: linear-gradient(
      90deg,
      ${colors.grey2} 50%,
      ${colors.grey3} 50%
    );
    background-size: 200% 100%;
    background-position: right;
  }
  &:active {
    background-position: left;
    transition: all ${CARD_RENAME_TIMEOUT}ms cubic-bezier(0.83, 0, 0.17, 1);
  }
`;

export const Wrapper = styled(Card)<WrapperProps>`
  flex-direction: column;
  margin-top: ${metrics.spacing * 0.5}px;
  padding: 0;
  cursor: pointer;
  box-shadow: 0 5px 10px
    ${({ isDragging }) => (isDragging ? colors.blackA3 : 'inherit')};

  ${({ focused }) => (focused ? '' : longPressStyles)}
`;

export const Title = styled.div`
  max-height: 150px;
  margin: ${metrics.spacing * 0.5}px;
  white-space: pre-wrap;
  font-size: ${metrics.fontSize.medium}px;
  color: ${colors.black1};
  overflow-x: hidden;
`;

export const TitleInput = styled(TextArea)`
  width: 100%;
  max-height: 150px;
  padding: ${metrics.spacing * 0.5}px;
  font-size: ${metrics.fontSize.medium}px;
  color: ${colors.black1};
  resize: none;
  border: none;
  box-shadow: inset 0 0 0 2px ${colors.blueberry};
`;

export const BadgesWrapper = styled.div`
  margin: ${metrics.spacing * 0.5}px;
`;
