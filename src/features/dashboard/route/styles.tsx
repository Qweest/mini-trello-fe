import styled from 'styled-components';

import { colors, metrics } from '../../../styles';

interface WrapperProps {
  background: string;
}

export const Wrapper = styled.div<WrapperProps>`
  display: flex;
  height: 100%;
  background-image: ${({ background }) => `url(${background})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  user-select: none;
`;

export const GradientWrapper = styled.div`
  display: flex;
  flex: 1;
  padding: ${metrics.spacing}px;
  background-image: linear-gradient(
    rgba(0, 0, 0, 0.6),
    ${colors.none},
    ${colors.none}
  );
  overflow-x: auto;
`;
