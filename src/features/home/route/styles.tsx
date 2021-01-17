import styled from 'styled-components';

import { colors, metrics } from '../../../styles';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  background-color: ${colors.grey4};
  overflow: auto;
`;

export const AllBoards = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: ${metrics.spacing * 2}px;
`;
