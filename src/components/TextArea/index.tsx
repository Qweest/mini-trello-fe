import React, { DetailedHTMLProps, TextareaHTMLAttributes } from 'react';

import { Wrapper } from './styles';

interface Props
  extends DetailedHTMLProps<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {
  value?: string;
  innerRef?: any;
}

const TextArea: React.FC<Props> = (props) => {
  const { value, innerRef, ...rest } = props;

  return <Wrapper value={value} ref={innerRef} {...rest} />;
};

export default TextArea;
