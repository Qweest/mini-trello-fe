import React, { Fragment, useState, useRef, useEffect } from 'react';
import { HiOutlinePlus } from 'react-icons/hi';

import { hooks, validation } from '../../../../utils';
import { DefaultControls } from '../../../../components';
import { Wrapper, Button, TitleArea, AreaCard } from './styles';

interface Props {
  createCard: (title: string) => void;
}

const CreateCardButton: React.FC<Props> = (props) => {
  const { createCard } = props;
  const wrapperRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState('');

  const handleBlockClick = () => {
    setFocused(true);
  };

  const handleCloseClick = () => {
    setFocused(false);
    setValue('');
  };

  const handleProceedClick = () => {
    createCard(value);
    handleCloseClick();
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    if (focused) {
      inputRef.current?.focus();
    }
  }, [focused]);

  hooks.useOutsideClick(wrapperRef, handleCloseClick, [focused]);

  return (
    <Wrapper ref={wrapperRef}>
      {focused ? (
        <Fragment>
          <AreaCard>
            <TitleArea
              value={value}
              onChange={handleTextChange}
              innerRef={inputRef}
              placeholder="Enter card title..."
            />
          </AreaCard>
          <DefaultControls
            disabled={validation.isEmpty(value)}
            proceedText="Create card"
            onCloseClick={handleCloseClick}
            onProceedClick={handleProceedClick}
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
