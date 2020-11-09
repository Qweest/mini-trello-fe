import styled from 'styled-components';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';

import { colors, metrics } from '../../../../styles';
import { Button } from '../../../../components';

export const TransparentWrapper = styled.div`
  width: 250px;
  height: 100%;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.grey2};
  border-radius: 3px;
  padding: ${metrics.spacing * 0.5}px;
`;

export const Title = styled.input`
  display: flex;
  flex: 1;
  width: 100%;
  box-sizing: border-box;
  padding: ${metrics.spacing * 0.25}px ${metrics.spacing * 0.5}px;
  font-size: ${metrics.fontSize.regular}px;
  font-weight: 500;
  background-color: transparent;
  border-color: transparent;
  border-width: 2px;
  border-radius: 3px;
  border-style: solid;
  outline: none;
  text-overflow: ellipsis;
  cursor: pointer;
  &:hover {
    background-color: ${colors.grey3};
  }
  &:focus {
    background-color: ${colors.white};
    border-color: ${colors.lightBlue};
    cursor: auto;
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

export const AddButton = styled(Button)`
  margin-top: ${metrics.spacing * 0.5}px;
  padding-left: ${metrics.spacing * 0.5}px;
  background-color: transparent;
  color: ${colors.grey};
  &:hover {
    background-color: ${colors.grey1};
    color: ${colors.black2};
  }
`;
