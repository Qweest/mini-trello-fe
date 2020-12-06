import React, { RefObject } from 'react';

import { Wrapper } from './styles';

interface Props {
  marginMultiplier?: number;
  className?: string;
  marginLast?: boolean;
  innerRef?: any;
}

const Row: React.FC<Props> = (props) => {
  const {
    children,
    className,
    marginMultiplier = 1,
    marginLast = false,
    innerRef,
    ...rest
  } = props;

  return (
    <Wrapper
      className={className}
      marginMultiplier={marginMultiplier}
      marginLast={marginLast}
      ref={innerRef}
      {...rest}
    >
      {children}
    </Wrapper>
  );
};

export default Row;
