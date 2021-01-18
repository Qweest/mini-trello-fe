import React, { useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import {
  HiOutlinePencil,
  HiOutlineMenuAlt2,
  HiOutlinePaperClip,
  HiOutlineUpload,
} from 'react-icons/hi';

import { Card, List } from '../../entities';
import { fetchCardAction, updateCardAction } from '../../thunks';
import {
  Wrapper,
  TitleWrapper,
  ListInfo,
  TextIconWrapper,
  Title,
  Header,
  Description,
  Attachments,
  AddAttachment,
} from './styles';

interface Props {
  cards: Card[];
  lists: List[];
  selectedCard: string;
}

const CardModalContent: React.FC<Props> = (props) => {
  const dispatch = useDispatch();
  const { cards, lists, selectedCard } = props;
  const { card, list } = useMemo(() => {
    const card = cards.find((it) => it.id === selectedCard)!;
    const list = lists.find((it) => it.id === card.listId)!;

    return {
      card,
      list,
    };
  }, [cards, lists]);
  const { title, description } = card;

  const submitChange = (field: string) => (value: string) => {
    dispatch(
      updateCardAction({
        id: selectedCard,
        [field]: value,
      }),
    );
  };

  useEffect(() => {
    dispatch(fetchCardAction({ id: selectedCard }));
  }, []);

  return (
    <Wrapper>
      <TitleWrapper marginMultiplier={0.5}>
        <HiOutlinePencil size={24} />
        <Title
          value={title}
          onSubmit={submitChange('title')}
          placeholder="Title shouldn't be empty..."
        />
      </TitleWrapper>
      <ListInfo>{list.name}</ListInfo>

      <TextIconWrapper>
        <HiOutlineMenuAlt2 size={24} />
        <Header>Description</Header>
      </TextIconWrapper>
      <Description
        value={description || ''}
        onSubmit={submitChange('description')}
        submitOnEnter={false}
        placeholder="Add a description..."
        saveEmpty
        useControls
      >
        {description}
      </Description>

      <TextIconWrapper>
        <HiOutlinePaperClip size={24} />
        <Header>Attachments</Header>
        <AddAttachment
          text="Add"
          Icon={<HiOutlineUpload />}
          onClick={() => {}}
        />
      </TextIconWrapper>
      <Attachments>Nothing here yet...</Attachments>
    </Wrapper>
  );
};

export default CardModalContent;
