import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';
import { useParams } from 'react-router-dom';

import bg from '../../../assets/images/temp-bg.jpg';
import { RootState } from '../../../store/entities';
import { Row } from '../../../components';
import List from '../components/List';
import CreateListButton from '../components/CreateListButton';
import {
  fetchBoardAction,
  moveListAction,
  createListAction,
  moveCardAction,
} from '../thunks';
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
  const { lists, id } = useSelector((state: RootState) => state.dashboard);
  const { id: paramId } = useParams<{ id: string }>();

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
    dispatch(fetchBoardAction({ id: paramId }));
  }, [paramId]);

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
      </GradientWrapper>
    </Wrapper>
  );
};

export default Dashboard;
