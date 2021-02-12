import styled from 'styled-components';

import { MainWrapper } from '../../../components';
import { colors, metrics } from '../../../styles';

interface WrapperProps {
  background: string;
}

export const Wrapper = styled(MainWrapper)<WrapperProps>`
  background-image: ${({ background }) => `url(${background})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding-top: 0;
`;

export const GradientWrapper = styled.div`
  display: flex;
  flex: 1;
  padding: ${metrics.spacing}px;
  padding-top: ${metrics.spacing * 3.5}px;
  background-image: linear-gradient(
    rgba(0, 0, 0, 0.6),
    ${colors.none},
    ${colors.none}
  );
  overflow-x: auto;
  overflow-y: hidden;
`;
