import styled from 'styled-components';

import { Card } from '../../../../components';
import { colors, metrics } from '../../../../styles';

interface WrapperProps {
  isDragging: boolean;
}

export const Wrapper = styled(Card)<WrapperProps>`
  flex-direction: column;
  margin-top: ${metrics.spacing * 0.5}px;
  cursor: pointer;
  &:hover {
    background-color: ${colors.grey3};
  }
  box-shadow: 0 5px 10px
    ${({ isDragging }) => (isDragging ? colors.blackA3 : 'inherit')};
`;

export const Title = styled.span`
  font-size: ${metrics.fontSize.medium}px;
  color: ${colors.black1};
  overflow-x: hidden;
  max-height: 150px;
`;

export const BadgesWrapper = styled.div`
  margin-top: ${metrics.spacing}px;
`;
