import styled from 'styled-components';

import { ComplexInput, Row, Button } from '../../../../components';
import { colors, metrics } from '../../../../styles';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
`;

export const TitleWrapper = styled(Row)`
  width: 550px;
  align-items: center;
  & > svg {
    color: ${colors.grey};
  }
`;

export const ListInfo = styled.div`
  margin-left: ${metrics.spacing * 2.5}px;
  font-size: ${metrics.fontSize.small}px;
  color: ${colors.grey};
`;

export const TextIconWrapper = styled(TitleWrapper)`
  width: 100%;
  margin: ${metrics.spacing}px 0;
  color: ${colors.black4};
`;

export const Title = styled(ComplexInput)`
  & > textarea {
    color: ${colors.black4};
    font-size: ${metrics.fontSize.large}px;
    font-weight: 600;
  }
`;

export const Header = styled.span`
  font-size: ${metrics.fontSize.regular}px;
  font-weight: 600;
`;

export const Description = styled(ComplexInput)`
  margin-left: ${metrics.spacing * 2.5}px;
  & > :first-child {
    background-color: ${colors.blackA5};
    &:hover {
      background-color: ${colors.blackA4};
    }
    &:active {
      background-color: ${colors.blackA3};
    }
  }
  & > textarea {
    min-height: 75px;
    max-height: 600px;
    color: ${colors.black4};
    background-color: ${colors.white};
    font-size: ${metrics.fontSize.medium}px;
  }
`;

export const Attachments = styled.div`
  margin-left: ${metrics.spacing * 2.5}px;
  font-size: ${metrics.fontSize.medium}px;
  color: ${colors.grey};
`;

export const AddAttachment = styled(Button)`
  padding: ${metrics.spacing * 0.5}px ${metrics.spacing}px;
  background-color: ${colors.blackA5};
  color: ${colors.grey};
  &:hover {
    background-color: ${colors.blackA4};
    color: ${colors.black4};
  }
  &:active {
    background-color: ${colors.blackA3};
  }
`;

export const RemoveButton = styled(Button)`
  align-self: flex-end;
  margin-top: ${metrics.spacing * 2}px;
  color: ${colors.grey};
  background-color: ${colors.none};
  &:hover {
    color: ${colors.danger};
    background: linear-gradient(
      90deg,
      ${colors.dangerA} 50%,
      ${colors.none} 50%
    );
    background-size: 201% 100%;
    background-position: right;
  }
  &:active {
    background-position: left;
    transition: all ${({ longPressTimeout }) => longPressTimeout}ms ease-in;
  }
`;
