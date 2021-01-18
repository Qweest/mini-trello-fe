import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';

import bg from '../../../assets/images/temp-bg.jpg';
import { RootState } from '../../../store/entities';
import { Modal, Row } from '../../../components';
import { mainService } from '../../../api';
import { BOARDS } from '../api/constants';
import List from '../components/List';
import CreateListButton from '../components/CreateListButton';
import CardModalContent from '../components/CardModalContent';
import {
  fetchBoardAction,
  moveListAction,
  createListAction,
  moveCardAction,
} from '../thunks';
import { actions } from '../slice';
import { List as ListEntity } from '../entities';
import { DROPPABLE_TYPES } from '../constants';
import { Wrapper, GradientWrapper } from './styles';

// eslint-disable-next-line react/display-name
const Lists = React.memo((props: { lists: ListEntity[] }): any => {
  const { lists } = props;

  return lists.map((it, index) => <List key={it.id} index={index} data={it} />);
});

const Dashboard: React.FC = () => {
  const dispatch = useDispatch();
  const { id, lists, cards, selectedCard } = useSelector(
    (state: RootState) => state.dashboard,
  );

  const handleModalClose = () => {
    dispatch(actions.selectCard(''));
  };

  const handleOnDragEnd = (result: DropResult) => {
    const { destination, source, type, draggableId } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    if (type === DROPPABLE_TYPES.LIST) {
      dispatch(
        moveListAction({
          id: draggableId,
          newIndex: destination.index,
          oldIndex: source.index,
        }),
      );

      return;
    }

    dispatch(
      moveCardAction({
        id: draggableId,
        listId: source.droppableId,
        toListId: destination.droppableId,
        newIndex: destination.index,
        oldIndex: source.index,
      }),
    );
  };

  const createList = (name: string) => {
    dispatch(
      createListAction({
        boardId: id,
        name,
      }),
    );
  };

  useEffect(() => {
    if (!id) {
      // FIXME
      mainService.get(BOARDS).then(({ data: boards }) => {
        dispatch(fetchBoardAction({ id: boards[0].id }));
      });
    }
  }, []);

  return (
    <Wrapper background={bg}>
      <GradientWrapper>
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable
            droppableId="board"
            direction="horizontal"
            type={DROPPABLE_TYPES.LIST}
          >
            {(providedDroppable) => {
              return (
                <Row
                  {...providedDroppable.droppableProps}
                  innerRef={providedDroppable.innerRef}
                  marginMultiplier={0.5}
                  marginLast
                >
                  <Lists lists={lists} />
                  {providedDroppable.placeholder}
                </Row>
              );
            }}
          </Droppable>
        </DragDropContext>
        <CreateListButton createList={createList} />
        <Modal opened={!!selectedCard} close={handleModalClose}>
          <CardModalContent
            close={handleModalClose}
            cards={cards}
            lists={lists}
            selectedCard={selectedCard}
          />
        </Modal>
      </GradientWrapper>
    </Wrapper>
  );
};

export default Dashboard;
