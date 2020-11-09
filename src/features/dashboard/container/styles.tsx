import styled from 'styled-components';

import { metrics } from '../../../styles';

interface WrapperProps {
  background: string;
}

export const Wrapper = styled.div<WrapperProps>`
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: ${metrics.spacing}px;
  background-image: ${({ background }) => `url(${background})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;
