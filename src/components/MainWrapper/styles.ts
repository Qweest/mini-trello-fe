import styled from 'styled-components';

import { metrics } from '../../styles';

interface WrapperProps {
  withHeader: boolean;
}

export const Wrapper = styled.div<WrapperProps>`
  display: flex;
  height: 100%;
  position: relative;
  padding-top: ${({ withHeader }) =>
    withHeader ? metrics.spacing * 2.5 : 0}px;
  user-select: none;
`;
