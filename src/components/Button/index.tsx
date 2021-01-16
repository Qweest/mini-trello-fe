import React, { ReactElement, SyntheticEvent, useState } from 'react';

import { useLongPress } from '../../utils/hooks';
import Row from '../Row';
import { Wrapper, IconWrapper } from './styles';

interface Props {
  text?: string;
  Icon?: ReactElement;
  className?: string;
  onClick: (e: SyntheticEvent) => void;
  longPressTimeout?: number;
  pending?: boolean;
}

const Button: React.FC<Props> = (props) => {
  const {
    children,
    text,
    Icon,
    className,
    onClick,
    longPressTimeout,
    pending,
  } = props;
  const [longPressed, setLongPressed] = useState(false);

  const handleLongPressed = () => {
    setLongPressed(true);
  };

  const handleLongUnpressed = () => {
    setLongPressed(false);
  };

  const handleClick = (e: SyntheticEvent) => {
    if ((longPressTimeout && !longPressed) || pending) {
      return;
    }

    onClick(e);
    handleLongUnpressed();
  };

  const longPressProps = useLongPress(
    handleLongPressed,
    longPressTimeout,
    handleLongUnpressed,
  );

  return (
    <Wrapper
      className={className}
      onClick={handleClick}
      pending={pending}
      {...longPressProps}
    >
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
