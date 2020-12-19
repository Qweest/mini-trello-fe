import styled from 'styled-components';

import { metrics, colors } from '../../styles';

export const Wrapper = styled.div`
  cursor: pointer;
  border-radius: 3px;
  padding: ${metrics.spacing * 0.5}px;
  font-size: ${metrics.fontSize.medium}px;
  color: ${colors.black4};
  background-color: ${colors.grey1};
  &:hover {
    background-color: ${colors.grey2};
  }
  &:active {
    background-color: ${colors.clay};
    transition: all 0.2s ease;
  }
  user-select: auto;
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
`;
