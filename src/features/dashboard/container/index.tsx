import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from 'react-beautiful-dnd';

import bg from '../../../assets/images/temp_bg.jpg';
import Column from '../components/Column';
import { Row } from '../../../components';
import { State } from '../../../store/entities';
import AddColumnButton from '../components/AddColumnButton';
import { fetchBoardAction } from '../thunks';
import { Wrapper } from './styles';

const Dashboard = () => {
  const dispatch = useDispatch();
  const { taskColumns } = useSelector((state: State) => state.dashboard)

  useEffect(() => {
    dispatch(fetchBoardAction('5fabe8169f19e62e0835de01'));
  }, []);

  const handleOnDragEnd = (result: DropResult) => {
    if (!result.destination) return;

    const { destination, source } = result;
    const nextColumns = [...taskColumns];

    nextColumns[destination?.index] = taskColumns[source.index];
    nextColumns[source.index] = taskColumns[destination?.index];
  };

  return (
    <Wrapper background={bg}>
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
                    <Draggable key={it._id} draggableId={it._id} index={index}>
                      {(providedDraggable) => (
                        <div
                          {...providedDraggable.draggableProps}
                          {...providedDraggable.dragHandleProps}
                          ref={providedDraggable.innerRef}
                        >
                          <Column data={it} />
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
      <AddColumnButton />
    </Wrapper>
  );
};

export default Dashboard;
