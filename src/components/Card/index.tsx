import React from 'react';

import { Wrapper } from './styles';

interface Props {
  className?: string;
  innerRef?: any;
}

const Card: React.FC<Props> = ({ children, className, innerRef, ...rest }) => {
  return (
    <Wrapper className={className} ref={innerRef} {...rest}>
      {children}
    </Wrapper>
  );
};

export default Card;
