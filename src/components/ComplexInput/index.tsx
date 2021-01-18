import React, { useEffect, useRef, useState } from 'react';

import { validation } from '../../utils';
import { useOutsideClick } from '../../utils/hooks';
import { Wrapper, InputCover, InputArea, Controls } from './styles';

interface Props {
  value: string;
  onSubmit: (title: string) => void;
  placeholder?: string;
  submitOnEnter?: boolean;
  saveEmpty?: boolean;
  useControls?: boolean;
  className?: string;
}

const ComplexInput: React.FC<Props> = (props) => {
  const {
    value: initialValue,
    onSubmit,
    className,
    submitOnEnter = true,
    saveEmpty,
    useControls,
    placeholder,
  } = props;
  const wrapper = useRef<HTMLDivElement>(null);
  const inputArea = useRef<HTMLTextAreaElement>(null);
  const [value, setValue] = useState(initialValue);
  const [focused, setFocused] = useState(false);

  const blur = () => {
    inputArea.current?.blur();
    setFocused(false);
  };

  const submit = () => {
    if ((!validation.isEmpty(value) || saveEmpty) && value !== initialValue) {
      onSubmit(value);
    } else {
      setValue(initialValue);
    }

    blur();
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  const handleEnterDown = () => {
    if (submitOnEnter) {
      submit();
    }
  };

  const handleCoverClick = () => {
    inputArea.current?.focus();
    inputArea.current?.select();
    setFocused(true);
  };

  const handleCloseClick = () => {
    setValue(initialValue);
    blur();
  };

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  useOutsideClick(wrapper, submit, focused, [value]);

  return (
    <Wrapper ref={wrapper} className={className}>
      <InputCover onClick={handleCoverClick} focused={focused} />
      <InputArea
        value={value}
        innerRef={inputArea}
        onChange={handleChange}
        onEnterDown={handleEnterDown}
        placeholder={placeholder}
      />
      {useControls && focused ? (
        <Controls
          onProceedClick={submit}
          onCloseClick={handleCloseClick}
          proceedText="Save"
        />
      ) : null}
    </Wrapper>
  );
};

export default ComplexInput;
