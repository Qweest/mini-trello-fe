import React, { Fragment, useState, useRef, useEffect } from 'react';
import { HiOutlinePlus } from 'react-icons/hi';

import { hooks, validation } from '../../../../utils';
import { DefaultControls } from '../../../../components';
import { Wrapper, Button, TitleArea, AreaCard } from './styles';

interface Props {
  createCard: (title: string) => void;
  createCardFlag: boolean;
  setCreateCardFlag: (flag: boolean) => void;
}

const CreateCardButton: React.FC<Props> = (props) => {
  const { createCard, createCardFlag, setCreateCardFlag } = props;
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
    if (!isEmpty) {
      createCard(value);
    }
    handleClose();
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    if (createCardFlag) {
      setFocused(true);
      setCreateCardFlag(false);
    }
  }, [createCardFlag]);

  hooks.useOutsideClick(wrapperRef, handleProceed, focused, [isEmpty, value]);
  hooks.useScrollOnFocus(wrapperRef, focused);

  return (
    <Wrapper ref={wrapperRef}>
      {focused ? (
        <Fragment>
          <AreaCard>
            <TitleArea
              value={value}
              onChange={handleTextChange}
              onEnterDown={handleProceed}
              placeholder="Enter card title..."
              autoFocus
            />
          </AreaCard>
          <DefaultControls
            disabled={isEmpty}
            proceedText="Create card"
            onCloseClick={handleClose}
            onProceedClick={handleProceed}
          />
        </Fragment>
      ) : (
        <Button
          text="Create card"
          Icon={<HiOutlinePlus />}
          onClick={handleBlockClick}
        />
      )}
    </Wrapper>
  );
};

export default React.memo(CreateCardButton);
