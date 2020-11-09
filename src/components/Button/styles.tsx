import styled from 'styled-components';

import { metrics, colors } from '../../styles';

export const Wrapper = styled.div`
  display: flex;
  padding: ${metrics.spacing * 0.25}px;
  border-radius: 3px;
  cursor: pointer;
  background-color: ${colors.lightBlue};
  color: ${colors.white};
  font-size: ${metrics.fontSize.medium}px;
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: ${metrics.spacing * 0.25}px;
`;
