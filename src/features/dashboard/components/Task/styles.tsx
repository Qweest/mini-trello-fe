import styled from 'styled-components';

import { Card } from '../../../../components';
import { colors, metrics } from '../../../../styles';

export const Wrapper = styled(Card)`
  flex-direction: column;
  margin-top: ${metrics.spacing * 0.5}px;
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
