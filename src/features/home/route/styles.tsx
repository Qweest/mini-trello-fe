import styled from 'styled-components';

import { MainWrapper } from '../../../components';
import { colors, metrics } from '../../../styles';

export const Wrapper = styled(MainWrapper)`
  justify-content: center;
  background-color: ${colors.grey4};
  overflow: auto;
`;

export const AllBoards = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  margin-top: ${metrics.spacing * 2}px;
`;
