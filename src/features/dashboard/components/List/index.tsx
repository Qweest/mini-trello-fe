import React, { ReactElement, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Draggable, Droppable } from 'react-beautiful-dnd';

import { validation } from '../../../../utils';
import { Row } from '../../../../components';
import { List as ListEntity, Card as CardEntity } from '../../entities';
import { createCardAction, updateListAction } from '../../thunks';
import Card from '../Card';
import CreateCardButton from '../CreateCardButton';
import { Wrapper, Title, ActionIcon } from './styles';

interface Props {
  data: ListEntity;
  boardId: string;
  index: number;
}

// eslint-disable-next-line react/display-name
const InnerList = React.memo((props: { cards: CardEntity[] }): any => {
  const { cards } = props;

  return cards.map((it, index) => <Card key={it.id} data={it} index={index} />);
});

const List: React.FC<Props> = (props) => {
  const { data, boardId, index } = props;
  const { id, name, cards } = data;
  const dispatch = useDispatch();
  const [title, setTitle] = useState(name);

  useEffect(() => {
    setTitle(name);
  }, [name]);

  const updateList = (name: string) => {
    dispatch(
      updateListAction({
        id,
        boardId,
        name,
      }),
    );
  };

  const createCard = (title: string) => {
    dispatch(createCardAction({ boardId, listId: id, title }));
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleSubmitTitle = () => {
    if (!validation.isEmpty(title) && title !== name) {
      updateList(title);
    } else {
      setTitle(name);
    }
  };

  const handleTitleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.currentTarget.blur();
    }
  };

  return (
    <Draggable draggableId={id} index={index}>
      {(providedDraggable, snapshot) => (
        <Wrapper
          {...providedDraggable.draggableProps}
          ref={providedDraggable.innerRef}
          isDragging={snapshot.isDragging}
        >
          <Row marginMultiplier={0.5} {...providedDraggable.dragHandleProps}>
            <Title
              placeholder="Enter list title..."
              value={title}
              onKeyDown={handleTitleKeyDown}
              onChange={handleTitleChange}
              onBlur={handleSubmitTitle}
            />
            <ActionIcon />
          </Row>
          <Droppable droppableId={id} type="card">
            {(providedDroppable) => (
              <div
                ref={providedDroppable.innerRef}
                {...providedDroppable.droppableProps}
              >
                <InnerList cards={cards} />
                {providedDroppable.placeholder}
              </div>
            )}
          </Droppable>
          <CreateCardButton createCard={createCard} />
        </Wrapper>
      )}
    </Draggable>
  );
};

export default List;
