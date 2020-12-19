import React, { ReactElement, SyntheticEvent } from 'react';

import Row from '../Row';
import { Wrapper, IconWrapper } from './styles';

interface Props {
  text?: string;
  Icon?: ReactElement;
  className?: string;
  onClick?: (e: SyntheticEvent) => void;
}

const Button: React.FC<Props> = (props) => {
  const { children, text, Icon, className, onClick } = props;

  return (
    <Wrapper className={className} onClick={onClick}>
      {children || (
        <Row marginMultiplier={text && Icon ? 0.25 : 0}>
          <IconWrapper>{Icon}</IconWrapper>
          <span>{text}</span>
        </Row>
      )}
    </Wrapper>
  );
};

export default Button;
