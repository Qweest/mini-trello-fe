import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { validation } from '../../../../utils';
import { Row } from '../../../../components';
import { List as ListEntity } from '../../entities';
import Card from '../Card';
import CreateCardButton from '../CreateCardButton';
import { createCardAction, updateListAction } from '../../thunks';
import { TransparentWrapper, Wrapper, Title, ActionIcon } from './styles';

interface Props {
  data: ListEntity;
  boardId: string;
}

const List: React.FC<Props> = (props) => {
  const { data, boardId } = props;
  const { id, name, cards } = data;
  const dispatch = useDispatch();
  const [title, setTitle] = useState(name);

  const updateList = (name: string) => {
    dispatch(
      updateListAction({
        id: id,
        boardId,
        name,
      }),
    );
  };

  const createCard = (title: string) => {
    dispatch(createCardAction({ boardId, listId: id, title }));
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleSubmitTitle = () => {
    if (!validation.isEmpty(title) && title !== name) {
      updateList(title);
    } else {
      setTitle(name);
    }
  };

  const handleTitleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.currentTarget.blur();
    }
  };

  return (
    <TransparentWrapper>
      <Wrapper>
        <Row marginMultiplier={0.5}>
          <Title
            placeholder="Enter list title..."
            value={title}
            onKeyDown={handleTitleKeyDown}
            onChange={handleTitleChange}
            onBlur={handleSubmitTitle}
          />
          <ActionIcon />
        </Row>
        {cards.map((it) => (
          <Card key={it.id} data={it} />
        ))}
        <CreateCardButton createCard={createCard} />
      </Wrapper>
    </TransparentWrapper>
  );
};

export default List;
