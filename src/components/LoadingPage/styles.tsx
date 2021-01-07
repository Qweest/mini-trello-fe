import styled from 'styled-components';

import { ReactComponent as Pulse } from '../../assets/images/pulse.svg';
import { colors } from '../../styles';

export const Wrapper = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-color: ${colors.grey3};
`;

export const LoadingSpinner = styled(Pulse)`
  width: 150px;
  height: 150px;
`;
