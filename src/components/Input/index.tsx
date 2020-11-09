import React from 'react';

import { Wrapper } from './styles';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  value?: string;
}

const Input: React.FC<Props> = (props) => {
  const { value, placeholder, className, ...rest } = props;

  return (
    <Wrapper
      value={value}
      placeholder={placeholder}
      className={className}
      {...rest}
    />
  );
};

export default Input;
