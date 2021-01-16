import styled, { css, keyframes } from 'styled-components';

import { metrics, colors } from '../../styles';

interface WrapperProps {
  pending: boolean;
}

const loadingAnimation = keyframes`
  0% { background-position: 0 40% }
  50% { background-position: 100% 61% }
  100% { background-position: 0 40% }
`;

const pendingStyle = css`
  cursor: not-allowed;
  background: linear-gradient(90deg, #a1a1a1, #d9d9d9, #7a7a7a);
  background-size: 600% 600%;
  animation: ${loadingAnimation} 3s ease infinite;
`;

export const Wrapper = styled.div<WrapperProps>`
  cursor: pointer;
  border-radius: 3px;
  padding: ${metrics.spacing * 0.5}px;
  font-size: ${metrics.fontSize.medium}px;
  color: ${colors.black4};
  background-color: ${colors.grey1};
  &:hover {
    background-color: ${colors.grey2};
  }
  &:active {
    background-color: ${colors.clay};
    transition: all 0.2s ease;
  }
  user-select: auto;

  ${({ pending }) => (pending ? pendingStyle : '')};
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
`;
