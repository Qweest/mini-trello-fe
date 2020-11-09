import styled from 'styled-components';

import { colors, metrics } from '../../../../styles';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.white};
  border-radius: 3px;
  padding: ${metrics.spacing * 0.5}px;
  margin-top: ${metrics.spacing * 0.5}px;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.35);
  cursor: pointer;
  &:hover {
    background-color: ${colors.grey3};
  }
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
