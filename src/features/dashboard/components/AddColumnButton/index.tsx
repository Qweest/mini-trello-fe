import React, { Fragment, useRef, useState } from 'react';
import { HiOutlinePlus, HiOutlineX } from 'react-icons/hi';

import { Wrapper, Button, Input, Row, Add, Cancel } from './styles';

const AddColumnButton: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [focused, setFocused] = useState(false);

  const handleBlockClick = () => {
    setFocused(true);
  };

  return (
    <Wrapper focused={focused} onClick={handleBlockClick}>
      {focused ? (
        <Fragment>
          <Input ref={inputRef} placeholder="Enter list title..." />
          <Row marginMultiplier={0.25}>
            <Add>Add List</Add>
            <Cancel Icon={<HiOutlineX size={24} />} />
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
