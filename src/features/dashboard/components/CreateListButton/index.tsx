import React, { Fragment, useState, useRef } from 'react';
import { HiOutlinePlus } from 'react-icons/hi';

import { FocusableProps } from '../../../../common/entities';
import { DefaultControls } from '../../../../components';
import { hooks, validation } from '../../../../utils';
import { Wrapper, Button, Input } from './styles';

interface Props extends FocusableProps {
  createList: (title: string) => void;
}

const CreateListButton: React.FC<Props> = (props) => {
  const { createList, focused, setFocused } = props;
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [value, setValue] = useState('');
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
    <Wrapper ref={wrapperRef} focused={focused} onClick={handleBlockClick}>
      {focused ? (
        <Fragment>
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
        </Fragment>
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
