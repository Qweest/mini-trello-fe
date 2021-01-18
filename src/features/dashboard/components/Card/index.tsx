import React, { useEffect, useRef, useState } from 'react';
import { HiOutlineMenuAlt2 } from 'react-icons/hi';
import { Draggable } from 'react-beautiful-dnd';
import { useDispatch } from 'react-redux';

import { hooks, validation } from '../../../../utils';
import { colors } from '../../../../styles';
import { Row } from '../../../../components';
import { actions } from '../../slice';
import { Card as CardEntity } from '../../entities';
import { CARD_LONG_PRESS_TIMEOUT } from '../../constants';
import { updateCardAction } from '../../thunks';
import { Wrapper, Title, BadgesWrapper, TitleInput } from './styles';

interface Props {
  data: CardEntity;
  index: number;
}

const Card: React.FC<Props> = ({ data, index }) => {
  const dispatch = useDispatch();
  const { id, title, description } = data;
  const inputRef = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState(title);
  const [focused, setFocused] = useState(false);
  const showBadges = !!description; // FIXME

  const handleClick = () => {
    if (!focused) {
      dispatch(actions.selectCard(id));
    }
  };

  const handleLongPressed = () => {
    setFocused(true);
    inputRef.current?.select();
  };

  const handleInputOutsideClick = () => {
    if (title !== value && !validation.isEmpty(value)) {
      dispatch(updateCardAction({ id, title: value }));
    } else {
      setValue(title);
    }

    setFocused(false);
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  const longPressProps = hooks.useLongPress(
    handleLongPressed,
    CARD_LONG_PRESS_TIMEOUT,
  );

  useEffect(() => {
    setValue(title);
  }, [title]);

  hooks.useOutsideClick(inputRef, handleInputOutsideClick, focused, [value]);

  return (
    <Draggable draggableId={id} index={index}>
      {(providedDraggable, snapshot) => (
        <Wrapper
          {...providedDraggable.draggableProps}
          {...providedDraggable.dragHandleProps}
          {...longPressProps}
          focused={focused}
          innerRef={providedDraggable.innerRef}
          isDragging={snapshot.isDragging}
          onClick={handleClick}
        >
          {focused ? (
            <TitleInput
              autoFocus
              value={value}
              innerRef={inputRef}
              onChange={handleTitleChange}
            />
          ) : (
            <Title>{value}</Title>
          )}
          {showBadges && (
            <BadgesWrapper>
              <Row>
                {description && (
                  <HiOutlineMenuAlt2
                    title="This card has a description"
                    color={colors.grey}
                  />
                )}
              </Row>
            </BadgesWrapper>
          )}
        </Wrapper>
      )}
    </Draggable>
  );
};

export default Card;
