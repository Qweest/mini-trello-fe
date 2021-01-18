import React, { DetailedHTMLProps, HTMLAttributes } from 'react';

import { Wrapper } from './styles';

interface Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
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
