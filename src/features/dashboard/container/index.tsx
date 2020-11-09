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
                          ref={providedDraggable.innerRef}
                          {...providedDraggable.draggableProps}
                          {...providedDraggable.dragHandleProps}
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
    </Wrapper>
  );
};

export default Dashboard;
