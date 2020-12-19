import styled from 'styled-components';

import { colors, metrics } from '../../../../styles';
import { Button } from '../../../../components';

interface WrapperProps {
  isDragging: boolean;
}

export const Wrapper = styled.div<WrapperProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 250px;
  height: fit-content;
  max-height: 100%;
  background-color: ${colors.grey2};
  border-radius: 3px;
  padding: ${metrics.spacing * 0.5}px;
  box-sizing: border-box;
  box-shadow: 0 0 30px
    ${({ isDragging }) => (isDragging ? colors.blackA2 : colors.none)};
`;

export const ContentWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const DroppableArea = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  z-index: -1;
`;

export const ActionIcon = styled(Button)`
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
