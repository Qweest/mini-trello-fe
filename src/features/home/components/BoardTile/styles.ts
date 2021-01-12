import styled from 'styled-components';

import { colors, metrics } from '../../../../styles';

interface WrapperProps {
  img?: string;
}

export const Wrapper = styled.div<WrapperProps>`
  display: flex;
  padding: ${metrics.spacing * 0.5}px;
  border-radius: ${metrics.spacing * 0.25}px;
  height: 80px;
  width: 12%;
  background-color: ${colors.grey};
  background: ${({ img }) => `url(${img}) center` || 'none'};
  background-size: cover;
  cursor: pointer;
  margin: 0.4%;
`;

export const Text = styled.div`
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  max-height: 40px;
`;
