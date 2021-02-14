import styled from 'styled-components';

import { colors, metrics } from '../../../../styles';
import { Button, ComplexInput } from '../../../../components';

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

export const DroppableArea = styled.div`
  position: absolute;
  top: 38px;
  width: 100%;
  height: calc(100vh - ${metrics.spacing * 7}px);
  z-index: -1;
`;

export const CardsWrapper = styled.div`
  width: 100%;
  overflow-y: auto;
  padding-bottom: ${metrics.spacing * 0.25}px;
`;

export const Title = styled(ComplexInput)`
  & > textarea {
    font-size: ${metrics.fontSize.regular}px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
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
