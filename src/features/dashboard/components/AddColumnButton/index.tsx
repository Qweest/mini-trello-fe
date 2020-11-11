import React, { Fragment, useState, useRef, useEffect, SyntheticEvent } from 'react';
import { HiOutlinePlus, HiOutlineX } from 'react-icons/hi';

import { Wrapper, Button, Input, Row, Add, Cancel } from './styles';

const AddColumnButton: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [focused, setFocused] = useState(false);

  useEffect(() => {
    if (focused && inputRef.current) {
      const handleBlur = () => setFocused(false);

      inputRef.current.focus();
      inputRef.current.addEventListener('blur', handleBlur);

      return () => inputRef.current?.removeEventListener('blur', handleBlur);
    }

  }, [focused, inputRef]);

  const handleBlockClick = () => {
    setFocused(true);
  };

  const handleCloseClick = (e: SyntheticEvent) => {
    setFocused(false);
    e.stopPropagation();
  };

  return (
    <Wrapper focused={focused} onClick={handleBlockClick}>
      {focused ? (
        <Fragment>
          <Input innerRef={inputRef} placeholder="Enter list title..." />
          <Row marginMultiplier={0.25}>
            <Add>Add List</Add>
            <Cancel onClick={handleCloseClick} Icon={<HiOutlineX size={24} />} />
          </Row>
        </Fragment>
      ) : (
        <Button
          text="Add list"
          Icon={<HiOutlinePlus />}
          onClick={handleBlockClick}
        />
      )}
    </Wrapper>
  );
};

export default AddColumnButton;
