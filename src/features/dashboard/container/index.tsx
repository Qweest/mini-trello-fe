import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from 'react-beautiful-dnd';

import bg from '../../../assets/images/temp-bg.jpg';
import Column from '../components/Column';
import { Row } from '../../../components';
import { RootState } from '../../../store/entities';
import AddColumnButton from '../components/AddColumnButton';
import {
  addColumnAction,
  addTaskAction,
  fetchBoardAction,
  moveColumnAction,
} from '../thunks';
import { Wrapper, GradientWrapper } from './styles';

const Dashboard: React.FC = () => {
  const dispatch = useDispatch();
  const { taskColumns, id } = useSelector(
    (state: RootState) => state.dashboard,
  );

  useEffect(() => {
    if (!id) {
      dispatch(fetchBoardAction({ boardId: '5fabe8169f19e62e0835de01' }));
    }
  }, []);

  const handleOnDragEnd = (result: DropResult) => {
    if (!result.destination) return;

    const { destination, source } = result;

    dispatch(
      moveColumnAction({
        boardId: id,
        oldPosition: source.index,
        newPosition: destination?.index,
      }),
    );
  };

  const addColumn = (name: string) => {
    dispatch(
      addColumnAction({
        boardId: id,
        name,
      }),
    );
  };

  const addTask = (columnId: string) => (title: string) => {
    dispatch(addTaskAction({ boardId: id, taskColumnId: columnId, title }));
  };

  return (
    <Wrapper background={bg}>
      <GradientWrapper>
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="columns" direction="horizontal">
            {(providedDroppable) => {
              return (
                <div
                  {...providedDroppable.droppableProps}
                  ref={providedDroppable.innerRef}
                >
                  <Row marginMultiplier={0.5} marginLast>
                    {taskColumns.map((it, index) => (
                      <Draggable key={it.id} draggableId={it.id} index={index}>
                        {(providedDraggable) => (
                          <div
                            {...providedDraggable.draggableProps}
                            {...providedDraggable.dragHandleProps}
                            ref={providedDraggable.innerRef}
                          >
                            <Column addTask={addTask(it.id)} data={it} />
                          </div>
                        )}
                      </Draggable>
                    ))}
                  </Row>
                  {providedDroppable.placeholder}
                </div>
              );
            }}
          </Droppable>
        </DragDropContext>
        <AddColumnButton addColumn={addColumn} />
      </GradientWrapper>
    </Wrapper>
  );
};

export default Dashboard;
