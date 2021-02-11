import styled from 'styled-components';

import { colors, metrics } from '../../../../styles';

interface WrapperProps {
  img?: string;
}

export const Wrapper = styled.div<WrapperProps>`
  position: relative;
  border-radius: ${metrics.spacing * 0.25}px;
  background-color: ${colors.grey};
  background: ${({ img }) => `url(${img}) center` || 'none'};
  background-size: cover;
  width: 17%;
  margin: 0.4%;
  cursor: pointer;
`;

export const Text = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  max-height: 40px;
  color: ${colors.white};
  font-weight: 700;
`;

export const Fade = styled.span`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  border-radius: ${metrics.spacing * 0.25}px;
  background-color: rgba(0, 0, 0, 0.2);
  ${Wrapper}:hover & {
    background-color: rgba(0, 0, 0, 0.3);
  }
`;

export const Details = styled.div`
  position: relative;
  display: flex;
  padding: ${metrics.spacing * 0.5}px;
  border-radius: ${metrics.spacing * 0.25}px;
  height: 80px;
`;
