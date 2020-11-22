import styled from 'styled-components';

import { metrics, colors } from '../../styles';

export const Wrapper = styled.div`
  display: flex;
  background-color: ${colors.white};
  border-radius: 3px;
  padding: ${metrics.spacing * 0.5}px;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.35);
`;
