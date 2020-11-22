import React from 'react';

import { Wrapper } from './styles';

interface Props {
  className?: string;
}

const Card: React.FC<Props> = ({ children, className }) => {
  return <Wrapper className={className}>{children}</Wrapper>;
};

export default Card;
