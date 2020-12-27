import styled from 'styled-components';

import {
  Button as UnstyledButton,
  Input as UnstyledInput,
} from '../../../components';
import { colors, metrics } from '../../../styles';

export const Wrapper = styled.div`
  height: 100%;
  background-color: ${colors.grey4};
`;

export const Content = styled.div`
  display: flex;
  margin: auto;
  flex-direction: column;
  background-color: ${colors.white};
  border-radius: ${metrics.spacing * 0.25}px;
  padding: 25px 40px;
  box-shadow: rgba(0, 0, 0, 0.1) 0 0 10px;
  max-width: 400px;
`;

export const Header = styled.header`
  display: flex;
  justify-content: center;
`;

export const Form = styled.div``;

export const Title = styled.h1`
  text-align: center;
  color: ${colors.shuttleGray};
  font-size: ${metrics.fontSize.regular}px;
  letter-spacing: -0.01em;
  line-height: 28px;
  margin-top: 10px;
  margin-bottom: 25px;
`;

export const Input = styled(UnstyledInput)`
  width: 100%;
  font-size: ${metrics.fontSize.medium}px;
  height: 44px;
  border: 2px solid ${colors.grey2};
  padding: ${metrics.spacing * 0.5}px;
  margin-bottom: ${metrics.spacing}px;
  background-color: ${colors.grey4};
  &:hover {
    background-color: ${colors.grey3};
  }
  &:focus {
    background-color: ${colors.white};
  }
`;

export const Button = styled(UnstyledButton)`
  display: flex;
  background-color: ${colors.blue1};
  color: ${colors.white};
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: ${colors.blue};
  }
`;

export const TextDivider = styled.div`
  display: flex;
  justify-content: center;
  font-size: ${metrics.fontSize.small}px;
  margin-top: ${metrics.spacing}px;
  margin-bottom: ${metrics.spacing}px;
  color: ${colors.grey};
`;

export const SocialLogin = styled.div`
  display: flex;
  flex-direction: column;
`;
