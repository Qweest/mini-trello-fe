import styled from 'styled-components';

import { metrics, colors } from '../../styles';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${colors.cerulean};
  padding: ${metrics.spacing * 0.25}px;
`;
