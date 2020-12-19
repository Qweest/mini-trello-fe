import styled from 'styled-components';

import { metrics, colors } from '../../styles';

export const Wrapper = styled.input`
  display: flex;
  box-sizing: border-box;
  padding: ${metrics.spacing * 0.25}px;
  font-size: ${metrics.fontSize.regular}px;
  font-weight: 500;
  background-color: ${colors.white};
  border-color: ${colors.none};
  border-width: 2px;
  border-radius: 3px;
  border-style: solid;
  outline: none;
  text-overflow: ellipsis;
  &:focus {
    border-color: ${colors.blueberry};
    cursor: auto;
  }
`;
