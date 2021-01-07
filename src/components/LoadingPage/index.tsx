import React from 'react';

import { Wrapper, LoadingSpinner } from './styles';

interface Props {
  className?: string;
}

const LoadingPage: React.FC<Props> = ({ className }) => {
  return (
    <Wrapper className={className}>
      <LoadingSpinner />
    </Wrapper>
  );
};

export default LoadingPage;
