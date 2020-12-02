import React, { useState } from 'react';

import { validation } from '../../../../utils';
import { Row } from '../../../../components';
import { List as ListEntity } from '../../entities';
import Card from '../Card';
import CreateCardButton from '../CreateCardButton';
import { TransparentWrapper, Wrapper, Title, ActionIcon } from './styles';

interface Props {
  data: ListEntity;
  createCard: (title: string) => void;
  updateList: (name: string) => void;
}

const List: React.FC<Props> = (props) => {
  const { data, createCard, updateList } = props;
  const { name, cards } = data;
  const [title, setTitle] = useState(name);

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
