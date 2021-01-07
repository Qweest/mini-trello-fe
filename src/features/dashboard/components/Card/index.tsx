import React, { useRef, useState } from 'react';
import { HiOutlineBookOpen } from 'react-icons/hi';
import { Draggable } from 'react-beautiful-dnd';

import { hooks } from '../../../../utils';
import { colors } from '../../../../styles';
import { Row } from '../../../../components';
import { Card as CardEntity } from '../../entities';
import { CARD_LONG_PRESS_TIMEOUT } from '../../constants';
import { Wrapper, Title, BadgesWrapper, TitleInput } from './styles';

interface Props {
  data: CardEntity;
  index: number;
}

const Card: React.FC<Props> = ({ data, index }) => {
  const { id, title, description } = data;
  const inputRef = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState(title);
  const [focused, setFocused] = useState(false);
  const showBadges = !!description; // FIXME

  const handleLongPressed = () => {
    setFocused(true);
    inputRef.current?.select();
  };

  const handleInputOutsideClick = () => {
    setFocused(false);
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const longPressProps = hooks.useLongPress(
    handleLongPressed,
    CARD_LONG_PRESS_TIMEOUT,
  );

  hooks.useOutsideClick(inputRef, handleInputOutsideClick, focused);

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
                  <HiOutlineBookOpen
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
