import React, { ReactElement, Fragment } from 'react';

import { Wrapper, IconWrapper } from './styles';

interface Props {
  text?: string;
  Icon?: ReactElement;
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<Props> = (props) => {
  const { children, text, Icon, className, onClick } = props;

  return (
    <Wrapper className={className} onClick={onClick}>
      {children || (
        <Fragment>
          {Icon && <IconWrapper needMargin={!!text}>{Icon}</IconWrapper>}
          <span>{text}</span>
        </Fragment>
      )}
    </Wrapper>
  );
};

export default Button;
