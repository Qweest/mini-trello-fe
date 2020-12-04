import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from 'react-beautiful-dnd';

import bg from '../../../assets/images/temp-bg.jpg';
import { Row } from '../../../components';
import { RootState } from '../../../store/entities';
import List from '../components/List';
import CreateListButton from '../components/CreateListButton';
import { fetchBoardAction, moveListAction, createListAction } from '../thunks';
import { Wrapper, GradientWrapper } from './styles';

const Dashboard: React.FC = () => {
  const dispatch = useDispatch();
  const { lists, id } = useSelector((state: RootState) => state.dashboard);

  useEffect(() => {
    if (!id) {
      dispatch(fetchBoardAction({ id: '5fc7c3c35ffb70097740344b' }));
    }
  }, []);

  const handleOnDragEnd = (result: DropResult) => {
    const { destination, source } = result;

    if (!destination || destination.index === source.index) return;

    dispatch(
      moveListAction({
        boardId: id,
        oldPosition: source.index,
        newPosition: destination?.index,
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
          <Droppable droppableId="board" direction="horizontal">
            {(providedDroppable) => {
              return (
                <div
                  {...providedDroppable.droppableProps}
                  ref={providedDroppable.innerRef}
                >
                  <Row marginMultiplier={0.5} marginLast>
                    {lists.map((it, index) => (
                      <Draggable key={it.id} draggableId={it.id} index={index}>
                        {(providedDraggable) => (
                          <div
                            {...providedDraggable.draggableProps}
                            {...providedDraggable.dragHandleProps}
                            ref={providedDraggable.innerRef}
                          >
                            <List boardId={id} data={it} />
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {providedDroppable.placeholder}
                  </Row>
                </div>
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
