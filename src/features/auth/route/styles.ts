import styled, { keyframes } from 'styled-components';

import waveSvg from '../../../assets/images/wave.svg';
import { ReactComponent as TrelloLogo } from '../../../assets/images/trello-logo-blue.svg';
import { Card } from '../../../components';
import { colors, metrics } from '../../../styles';

const wave = keyframes`
    0% {
      margin-left: 0;
    }
    100% {
      margin-left: -1600px;
    }
`;

const swell = keyframes`
    0%, 100% {
      transform: translate3d(0, -50px, 0);
    }
    50% {
      transform: translate3d(0, 15px, 0);
    }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  background: radial-gradient(
    ellipse at center,
    ${colors.grey2} 35%,
    ${colors.opal} 100%
  );
  user-select: none;
`;

export const Ocean = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  height: 50px;
  width: 100%;
  background: ${colors.ocean};
`;

export const Wave = styled.div`
  background: url(${waveSvg}) repeat-x;
  position: absolute;
  bottom: 100%;
  width: 6400px;
  height: 198px;
  animation: ${wave} 10s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite;
  transform: translate3d(0, 0, 0);
  &:nth-of-type(2) {
    bottom: 0;
    animation: ${wave} 10s cubic-bezier(0.36, 0.45, 0.63, 0.53) -0.25s infinite,
      ${swell} 10s ease infinite;
  }
`;

export const Logo = styled(TrelloLogo)`
  display: flex;
  width: 270px;
  height: 150px;
`;

export const Content = styled(Card)`
  display: flex;
  flex-direction: column;
  width: 400px;
  padding: ${metrics.spacing * 3}px;
  z-index: 99;
`;
