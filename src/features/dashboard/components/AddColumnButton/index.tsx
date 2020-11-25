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

interface Props {
  addColumn: (title: string) => void;
}

const AddColumnButton: React.FC<Props> = (props) => {
  const { addColumn } = props;
  const inputRef = useRef<HTMLInputElement>(null);
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState('');

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
    setValue('');
    e.stopPropagation();
  };

  const handleProceedClick = (e: SyntheticEvent) => {
    addColumn(value);
    handleCloseClick(e);
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <Wrapper focused={focused} onClick={handleBlockClick}>
      {focused ? (
        <Fragment>
          <Input
            innerRef={inputRef}
            value={value}
            onChange={handleTextChange}
            placeholder="Enter list title..."
          />
          <DefaultControls
            proceedText="Add List"
            onCloseClick={handleCloseClick}
            onProceedClick={handleProceedClick}
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
