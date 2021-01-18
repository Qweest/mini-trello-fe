import React, { SyntheticEvent } from 'react';
import { HiOutlineX } from 'react-icons/hi';

import { Backdrop, CloseIcon, Wrapper } from './styles';

interface Props {
  opened: boolean;
  close: () => void;
}

const Modal: React.FC<Props> = (props) => {
  const { children, opened, close } = props;

  const handleWrapperClick = (e: SyntheticEvent) => {
    e.stopPropagation();
  };

  if (!opened) {
    return null;
  }

  return (
    <Backdrop onClick={close}>
      <Wrapper onClick={handleWrapperClick}>
        <CloseIcon onClick={close} Icon={<HiOutlineX size={18} />} />
        {children}
      </Wrapper>
    </Backdrop>
  );
};

export default Modal;
