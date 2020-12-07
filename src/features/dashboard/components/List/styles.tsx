import styled from 'styled-components';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';

import { colors, metrics } from '../../../../styles';
import { Input } from '../../../../components';

interface WrapperProps {
  isDragging: boolean;
}

export const Wrapper = styled.div<WrapperProps>`
  width: 250px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  background-color: ${colors.grey2};
  border-radius: 3px;
  padding: ${metrics.spacing * 0.5}px;
  box-sizing: border-box;
  box-shadow: 0 0 30px
    ${({ isDragging }) => (isDragging ? colors.blackA2 : colors.none)};
`;

export const Title = styled(Input)`
  flex: 1;
  padding: ${metrics.spacing * 0.25}px ${metrics.spacing * 0.5}px;
  background-color: ${colors.none};
  cursor: pointer;
  &:hover {
    background-color: ${colors.grey3};
  }
  &:focus {
    background-color: ${colors.white};
  }
`;

export const ActionIcon = styled(HiOutlineDotsHorizontal)`
  padding: ${metrics.spacing * 0.5}px;
  border-radius: 3px;
  cursor: pointer;
  color: ${colors.grey};
  &:hover {
    background-color: ${colors.grey1};
    color: ${colors.black3};
  }
`;
