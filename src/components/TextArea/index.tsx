import React, { DetailedHTMLProps, TextareaHTMLAttributes } from 'react';

import { Wrapper } from './styles';

interface Props
  extends DetailedHTMLProps<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {
  value?: string;
  innerRef?: any;
  maxRows?: number;
  onEnterDown?: () => void;
}

const TextArea: React.FC<Props> = (props) => {
  const { innerRef, value, maxRows, onEnterDown, ...rest } = props;

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && onEnterDown) {
      onEnterDown();
    }
  };

  return (
    <Wrapper
      ref={innerRef}
      value={value}
      maxRows={maxRows}
      onKeyDown={handleKeyDown}
      {...rest}
    />
  );
};

export default TextArea;
