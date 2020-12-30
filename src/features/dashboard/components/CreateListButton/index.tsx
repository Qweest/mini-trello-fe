import React, { Fragment, useState, useRef, useEffect } from 'react';
import { HiOutlinePlus } from 'react-icons/hi';
import { useDispatch, useSelector } from 'react-redux';

import { DefaultControls } from '../../../../components';
import { RootState } from '../../../../store/entities';
import { hooks, validation } from '../../../../utils';
import { Flags } from '../../entities';
import { actions } from '../../slice';
import { Wrapper, Button, Input } from './styles';

interface Props {
  createList: (title: string) => void;
}

const CreateListButton: React.FC<Props> = (props) => {
  const { createList } = props;
  const dispatch = useDispatch();
  const { createListFlag } = useSelector<RootState, Flags>(
    (state) => state.dashboard.flags,
  );
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

  useEffect(() => {
    if (createListFlag) {
      setFocused(true);
      dispatch(actions.setCreateListFlag({ flag: false }));
    }
  }, [createListFlag]);

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
