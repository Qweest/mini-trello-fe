import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';

import { Row } from '../../../../components';
import { RootState } from '../../../../store/entities';
import { List as ListEntity, Card as CardEntity } from '../../entities';
import {
  createCardAction,
  updateListAction,
  removeListAction,
} from '../../thunks';
import { DROPPABLE_TYPES } from '../../constants';
import { getListSortedCards } from '../../helpers';
import Card from '../Card';
import ListName from '../ListName';
import CreateCardButton from '../CreateCardButton';
import ListActions from '../ListActions';
import { Wrapper, ActionIcon, ContentWrapper, DroppableArea } from './styles';

interface Props {
  data: ListEntity;
  index: number;
}

// eslint-disable-next-line react/display-name
const Cards = React.memo((props: { cards: CardEntity[] }): any => {
  const { cards } = props;

  return cards.map((it, index) => <Card key={it.id} data={it} index={index} />);
});

const List: React.FC<Props> = (props) => {
  const { data, index } = props;
  const { id, name } = data;
  const dispatch = useDispatch();
  const { cards, id: boardId } = useSelector(
    (state: RootState) => state.dashboard,
  );
  const sortedCards = getListSortedCards(cards, id);
  const [actionsOpened, setActionsOpened] = useState(false);
  const [createCardFlag, setCreateCardFlag] = useState(false);

  const updateList = (name: string) => {
    dispatch(
      updateListAction({
        id,
        name,
      }),
    );
  };

  const createCard = (title: string) => {
    dispatch(createCardAction({ boardId, listId: id, title }));
  };

  const openActions = () => {
    setActionsOpened(true);
  };

  const closeActions = () => {
    setActionsOpened(false);
  };

  const handleRemoveList = () => {
    dispatch(removeListAction({ id }));
  };

  return (
    <Draggable draggableId={id} index={index}>
      {(providedDraggable, snapshot) => (
        <Wrapper
          {...providedDraggable.draggableProps}
          ref={providedDraggable.innerRef}
          isDragging={snapshot.isDragging}
        >
          <ListActions
            opened={actionsOpened}
            close={closeActions}
            setCreateCardFlag={setCreateCardFlag}
            onRemoveClick={handleRemoveList}
          />
          <Row marginMultiplier={0.5} {...providedDraggable.dragHandleProps}>
            <ListName name={name} updateName={updateList} />
            <ActionIcon
              onClick={openActions}
              Icon={<HiOutlineDotsHorizontal />}
            />
          </Row>
          <Droppable droppableId={id} type={DROPPABLE_TYPES.card}>
            {(providedDroppable) => (
              <ContentWrapper>
                <DroppableArea
                  ref={providedDroppable.innerRef}
                  {...providedDroppable.droppableProps}
                />
                <Cards cards={sortedCards} />
                {providedDroppable.placeholder}
                <CreateCardButton
                  createCard={createCard}
                  createCardFlag={createCardFlag}
                  setCreateCardFlag={setCreateCardFlag}
                />
              </ContentWrapper>
            )}
          </Droppable>
        </Wrapper>
      )}
    </Draggable>
  );
};

export default List;
