import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from 'react-beautiful-dnd';

import bg from '../../../assets/images/temp-bg.jpg';
import List from '../components/List';
import { Row } from '../../../components';
import { RootState } from '../../../store/entities';
import CreateListButton from '../components/CreateListButton';
import {
  fetchBoardAction,
  moveListAction,
  createListAction,
  updateListAction,
  createCardAction,
} from '../thunks';
import { Wrapper, GradientWrapper } from './styles';

const Dashboard: React.FC = () => {
  const dispatch = useDispatch();
  const { lists, id } = useSelector((state: RootState) => state.dashboard);

  useEffect(() => {
    if (!id) {
      dispatch(fetchBoardAction({ id: '5fabe8169f19e62e0835de01' }));
    }
  }, []);

  const handleOnDragEnd = (result: DropResult) => {
    if (!result.destination) return;

    const { destination, source } = result;

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

  const updateList = (listId: string) => (name: string) => {
    dispatch(
      updateListAction({
        id: listId,
        boardId: id,
        name,
      }),
    );
  };

  const createCard = (listId: string) => (title: string) => {
    dispatch(createCardAction({ boardId: id, listId, title }));
  };

  return (
    <Wrapper background={bg}>
      <GradientWrapper>
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="lists" direction="horizontal">
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
                            <List
                              updateList={updateList(it.id)}
                              createCard={createCard(it.id)}
                              data={it}
                            />
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
        <CreateListButton createList={createList} />
      </GradientWrapper>
    </Wrapper>
  );
};

export default Dashboard;
