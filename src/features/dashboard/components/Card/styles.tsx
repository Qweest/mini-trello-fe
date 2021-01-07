import styled from 'styled-components';

import { Card, Input } from '../../../../components';
import { colors, metrics } from '../../../../styles';
import { CARD_LONG_PRESS_TIMEOUT } from '../../constants';

interface WrapperProps {
  isDragging: boolean;
  focused: boolean;
}

export const Wrapper = styled(Card)<WrapperProps>`
  flex-direction: column;
  margin-top: ${metrics.spacing * 0.5}px;
  cursor: pointer;
  box-shadow: 0 5px 10px
    ${({ isDragging }) => (isDragging ? colors.blackA3 : 'inherit')};

  ${({ focused }) =>
    focused
      ? `
        padding: 0;
      `
      : `
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
        transition: all ${CARD_LONG_PRESS_TIMEOUT}ms linear;
      }
  `}
`;

export const Title = styled.span`
  font-size: ${metrics.fontSize.medium}px;
  color: ${colors.black1};
  overflow-x: hidden;
  max-height: 150px;
`;

export const TitleInput = styled(Input)`
  font-size: ${metrics.fontSize.medium}px;
  letter-spacing: inherit;
  color: ${colors.black1};
  padding: ${metrics.spacing * 0.45}px;
`;

export const BadgesWrapper = styled.div`
  margin-top: ${metrics.spacing * 0.5}px;
`;
