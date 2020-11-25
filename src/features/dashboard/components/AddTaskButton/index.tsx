import React, {
  Fragment,
  useState,
  useRef,
  useEffect,
  SyntheticEvent,
} from 'react';
import { HiOutlinePlus } from 'react-icons/hi';

import { validation } from '../../../../utils';
import { DefaultControls } from '../../../../components';
import { Wrapper, Button, TitleArea, AreaCard } from './styles';

interface Props {
  addTask: (title: string) => void;
}

const AddTaskButton: React.FC<Props> = (props) => {
  const { addTask } = props;
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
    addTask(value);
    handleCloseClick(e);
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  return (
    <Wrapper>
      {focused ? (
        <Fragment>
          <AreaCard>
            <TitleArea
              value={value}
              onChange={handleTextChange}
              innerRef={inputRef}
              placeholder="Enter task title..."
            />
          </AreaCard>
          <DefaultControls
            disabled={validation.isEmpty(value)}
            proceedText="Add task"
            onCloseClick={handleCloseClick}
            onProceedClick={handleProceedClick}
          />
        </Fragment>
      ) : (
        <Button
          text="Add task"
          Icon={<HiOutlinePlus />}
          onClick={handleBlockClick}
        />
      )}
    </Wrapper>
  );
};

export default AddTaskButton;
