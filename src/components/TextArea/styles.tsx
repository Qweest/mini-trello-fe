import styled from 'styled-components';
import TextareaAutosize from 'react-textarea-autosize';

import { metrics, colors } from '../../styles';

export const Wrapper = styled(TextareaAutosize)`
  display: flex;
  box-sizing: border-box;
  padding: ${metrics.spacing * 0.25}px;
  font-size: ${metrics.fontSize.medium}px;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Noto Sans,
    Ubuntu, Droid Sans, Helvetica Neue, sans-serif;
  background-color: ${colors.white};
  border-color: ${colors.none};
  border-width: 2px;
  border-radius: 3px;
  border-style: solid;
  outline: none;
  &:focus {
    border-color: ${colors.lightBlue};
    cursor: auto;
  }
`;
