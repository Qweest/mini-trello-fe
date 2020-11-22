import React, {
  Fragment,
  useState,
  useRef,
  useEffect,
  SyntheticEvent,
} from 'react';
import { HiOutlinePlus } from 'react-icons/hi';

import { DefaultControls } from '../../../../components';
import { Wrapper, Button, Input } from './styles';

const AddColumnButton: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [focused, setFocused] = useState(false);

  useEffect(() => {
    if (focused && inputRef.current) {
      inputRef.current.focus();
    }
  }, [focused, inputRef]);

  const handleBlockClick = (e: SyntheticEvent) => {
    setFocused(true);
    e.stopPropagation();
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
          <DefaultControls
            proceedText="Add List"
            onCloseClick={handleCloseClick}
          />
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
