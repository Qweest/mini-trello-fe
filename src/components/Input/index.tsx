import React, { DetailedHTMLProps, InputHTMLAttributes } from 'react';

import { Wrapper } from './styles';

export interface Props
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  value?: string;
  innerRef?: any;
}

const Input: React.FC<Props> = (props) => {
  const { value, placeholder, className, innerRef, ...rest } = props;

  return (
    <Wrapper
      value={value}
      placeholder={placeholder}
      className={className}
      ref={innerRef}
      {...rest}
    />
  );
};

export default Input;
