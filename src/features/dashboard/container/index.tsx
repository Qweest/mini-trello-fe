import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';

import bg from '../../../assets/images/temp-bg.jpg';
import { Row } from '../../../components';
import { RootState } from '../../../store/entities';
import List from '../components/List';
import CreateListButton from '../components/CreateListButton';
import { fetchBoardAction, moveListAction, createListAction } from '../thunks';
import { List as ListEntity } from '../entities';
import { Wrapper, GradientWrapper } from './styles';

// eslint-disable-next-line react/display-name
const InnerBoard = React.memo(
  (props: { lists: ListEntity[]; boardId: string }): any => {
    const { lists, boardId } = props;

    return lists.map((it, index) => (
      <List key={it.id} index={index} boardId={boardId} data={it} />
    ));
  },
);

const Dashboard: React.FC = () => {
  const dispatch = useDispatch();
  const { lists, id } = useSelector((state: RootState) => state.dashboard);

  useEffect(() => {
    if (!id) {
      dispatch(fetchBoardAction({ id: '5fcba017016a2418235310aa' }));
    }
  }, []);

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

    dispatch(
      moveListAction({
        id: draggableId,
        newIndex: destination.index,
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

  return (
    <Wrapper background={bg}>
      <GradientWrapper>
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="board" direction="horizontal" type="list">
            {(providedDroppable) => {
              return (
                <Row
                  {...providedDroppable.droppableProps}
                  innerRef={providedDroppable.innerRef}
                  marginMultiplier={0.5}
                  marginLast
                >
                  <InnerBoard lists={lists} boardId={id} />
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
