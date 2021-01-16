import styled from 'styled-components';
import { Link as UnstyledLink } from 'react-router-dom';

import { ReactComponent as TrelloLogo } from '../../../assets/images/trello-logo-blue.svg';
import { Button, Card, FormInput, Row } from '../../../components';
import { colors, metrics } from '../../../styles';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  background: linear-gradient(45deg, ${colors.grey2}, ${colors.grey4});
  user-select: none;
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
`;

export const Title = styled.span`
  text-align: center;
  color: ${colors.shuttleGray};
  font-weight: 600;
  font-size: ${metrics.fontSize.large}px;
  margin-bottom: ${metrics.spacing}px;
`;

export const Input = styled(FormInput)`
  width: 100%;
  font-size: ${metrics.fontSize.medium}px;
  padding: ${metrics.spacing * 0.75}px;
  margin-bottom: ${metrics.spacing}px;
  border-color: ${colors.grey2};
  background-color: ${colors.grey4};
  &:hover {
    background-color: ${colors.grey3};
  }
  &:focus {
    background-color: ${colors.white};
  }
`;

export const SubmitButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${metrics.spacing * 0.75}px;
  color: ${colors.white};
  background-color: ${colors.blue2};
  &:hover {
    background-color: ${colors.blue1};
  }
  &:active {
    background-color: ${colors.blue};
  }
`;

export const LinkBlock = styled.div`
  margin: ${metrics.spacing * 0.25}px 0;
  font-size: ${metrics.fontSize.small}px;
  color: ${colors.shuttleGray};
`;

export const Link = styled(UnstyledLink)`
  margin-left: ${metrics.spacing * 0.25}px;
  text-decoration: none;
  color: ${colors.blueberry};
  &:hover {
    color: ${colors.blue1};
  }
  &:active {
    color: ${colors.blue};
  }
`;

export const DividerWrapper = styled(Row)`
  align-items: center;
  margin: ${metrics.spacing}px;
  font-size: ${metrics.fontSize.small}px;
  color: ${colors.grey};
`;

export const Line = styled.div`
  width: 100%;
  border-top: 1px solid ${colors.grey2};
`;

export const SocialLogin = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${metrics.spacing * 0.5}px;
`;
