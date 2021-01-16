import styled from 'styled-components';

import { metrics, colors } from '../../styles';
import UnstyledInput from '../Input';

interface InputProps {
  error: string;
}

export const Wrapper = styled.div`
  display: flex;
  position: relative;
`;

export const Input = styled(UnstyledInput)<InputProps>`
  border-color: ${({ error }) => (error ? `${colors.danger} !important` : '')};
`;

export const Subline = styled.div`
  position: absolute;
  bottom: ${metrics.spacing * 0.15}px;
  font-size: ${metrics.fontSize.small}px;
`;

export const Error = styled(Subline)`
  color: ${colors.danger};
`;
