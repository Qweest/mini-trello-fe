import styled from 'styled-components';

import { Row as UnstyledRow } from '../../../../components';
import { metrics } from '../../../../styles';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1150px;
  margin-bottom: ${metrics.spacing * 1.5}px;
`;

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Row = styled(UnstyledRow)`
  align-items: center;
  padding-left: ${metrics.spacing * 0.7}px;
  margin-bottom: ${metrics.spacing * 0.25}px;
`;
