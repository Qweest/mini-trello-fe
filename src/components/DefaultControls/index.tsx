import React, { SyntheticEvent } from 'react';
import { HiOutlineX } from 'react-icons/hi';

import Row from '../Row';
import { Proceed, Close } from './styles';

interface Props {
  onProceedClick: (e: SyntheticEvent) => void;
  onCloseClick: (e: SyntheticEvent) => void;
  proceedText: string;
  className?: string;
  disabled?: boolean;
}

const DefaultControls: React.FC<Props> = (props) => {
  const {
    onProceedClick,
    onCloseClick,
    className,
    proceedText,
    disabled = false,
  } = props;

  const handleClose = (e: SyntheticEvent) => {
    onCloseClick(e);
    e.stopPropagation();
  };

  const handleProceed = (e: SyntheticEvent) => {
    onProceedClick(e);
    e.stopPropagation();
  };

  return (
    <Row className={className} marginMultiplier={0.25}>
      <Proceed disabled={disabled} onClick={handleProceed}>
        {proceedText}
      </Proceed>
      <Close onClick={handleClose} Icon={<HiOutlineX size={18} />} />
    </Row>
  );
};

export default DefaultControls;
