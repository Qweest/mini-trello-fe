import React, { ReactElement } from 'react';

import { Wrapper, IconWrapper } from './styles';

interface Props {
  text: string;
  Icon?: ReactElement;
  className?: string;
}

const Button: React.FC<Props> = (props) => {
  const { children, text, Icon, className } = props;

  return (
    <Wrapper className={className}>
      {Icon && <IconWrapper>{Icon}</IconWrapper>}
      <span>{text}</span>
      {children}
    </Wrapper>
  );
};

export default Button;
