import React from 'react';

import { Wrapper } from './styles';

interface Props {
  marginMultiplier?: number;
  className?: string;
  marginLast?: boolean;
}

const Row: React.FC<Props> = ({
  children,
  className,
  marginMultiplier = 1,
  marginLast = false,
}) => {
  return (
    <Wrapper
      className={className}
      marginMultiplier={marginMultiplier}
      marginLast={marginLast}
    >
      {children}
    </Wrapper>
  );
};

export default Row;
