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
  createList: (title: string) => void;
}

const CreateListButton: React.FC<Props> = (props) => {
  const { createList } = props;
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
    createList(value);
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
            proceedText="Create list"
            onCloseClick={handleCloseClick}
            onProceedClick={handleProceedClick}
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
