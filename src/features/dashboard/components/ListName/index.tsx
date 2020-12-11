import React, { useEffect, useRef, useState } from 'react';

import { validation } from '../../../../utils';
import { Wrapper, InputCover, Input } from './styles';

interface Props {
  name: string;
  updateName: (name: string) => void;
}

const ListName: React.FC<Props> = ({ name, updateName }) => {
  const input = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState(name);
  const [focused, setFocused] = useState(false);

  useEffect(() => {
    setValue(name);
  }, [name]);

  const submit = () => {
    if (!validation.isEmpty(value) && value !== name) {
      updateName(value);
    } else {
      setValue(name);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      input.current?.blur();
    }
  };

  const handleBlur = () => {
    submit();
    setFocused(false);
  };

  const handleCoverClick = () => {
    input.current?.focus();
    input.current?.select();
    setFocused(true);
  };

  return (
    <Wrapper>
      <InputCover onClick={handleCoverClick} focused={focused} />
      <Input
        value={value}
        placeholder="Enter list title..."
        innerRef={input}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        onBlur={handleBlur}
      />
    </Wrapper>
  );
};

export default ListName;
