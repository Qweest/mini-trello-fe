import React from 'react';

import { Header } from '../index';
import { Wrapper } from './styles';

interface Props {
  className?: string;
  withHeader?: boolean;
  headerTransparent?: boolean;
}

const MainWrapper: React.FC<Props> = (props) => {
  const {
    children,
    className,
    withHeader = true,
    headerTransparent = false,
  } = props;

  return (
    <Wrapper withHeader={withHeader} className={className}>
      {withHeader && <Header transparent={headerTransparent} />}
      {children}
    </Wrapper>
  );
};

export default MainWrapper;
