import React, { useState, useRef } from 'react';
import { HiOutlinePlus } from 'react-icons/hi';

import { DefaultControls } from '../../../../components';
import { hooks, validation } from '../../../../utils';
import { Wrapper, Button, InputBlockWrapper, Input } from './styles';

interface Props {
  createList: (title: string) => void;
}

const CreateListButton: React.FC<Props> = (props) => {
  const { createList } = props;
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [value, setValue] = useState('');
  const [focused, setFocused] = useState(false);
  const isEmpty = validation.isEmpty(value);

  const handleBlockClick = () => {
    setFocused(true);
  };

  const handleClose = () => {
    setFocused(false);
    setValue('');
  };

  const handleProceed = () => {
    createList(value);
    handleClose();
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  hooks.useOutsideClick(wrapperRef, handleClose, focused);
  hooks.useScrollOnFocus(wrapperRef, focused);

  return (
    <Wrapper ref={wrapperRef}>
      {focused ? (
        <InputBlockWrapper>
          <Input
            autoFocus
            value={value}
            onChange={handleTextChange}
            placeholder="Enter list title..."
          />
          <DefaultControls
            disabled={isEmpty}
            proceedText="Create list"
            onCloseClick={handleClose}
            onProceedClick={handleProceed}
          />
        </InputBlockWrapper>
      ) : (
        <Button
          text="Create list"
          Icon={<HiOutlinePlus />}
          onClick={handleBlockClick}
        />
      )}
    </Wrapper>
  );
};

export default React.memo(CreateListButton);
