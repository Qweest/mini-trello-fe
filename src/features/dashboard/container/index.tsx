import React, { useState } from 'react';
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from 'react-beautiful-dnd';

import bg from '../../../assets/images/temp_bg.jpg';
import Column from '../components/Column';
import { Row } from '../../../components';
import { mockedDashboardData } from '../contants';
import { Wrapper } from './styles';
import AddColumnButton from '../components/AddColumnButton';

const Dashboard = () => {
  const [columns, setColumns] = useState(mockedDashboardData.columns);

  const handleOnDragEnd = (result: DropResult) => {
    if (!result.destination) return;

    const { destination, source } = result;
    const nextColumns = [...columns];

    nextColumns[destination?.index] = columns[source.index];
    nextColumns[source.index] = columns[destination?.index];

    setColumns(nextColumns);
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
                  {columns.map((it, index) => (
                    <Draggable key={it.id} draggableId={it.id} index={index}>
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
