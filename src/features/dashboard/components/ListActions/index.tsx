import React, { useRef } from 'react';
import { HiOutlineX } from 'react-icons/hi';

import { hooks } from '../../../../utils';

import {
  Wrapper,
  Content,
  Action,
  TitleWrapper,
  Separator,
  CloseIcon,
} from './styles';

interface Props {
  opened: boolean;
  close: () => void;
  openCreateCard: () => void;
}

const ListActions: React.FC<Props> = (props) => {
  const { opened, close, openCreateCard } = props;
  const contentRef = useRef<HTMLDivElement>(null);

  const handleCreateCard = () => {
    openCreateCard();
    close();
  };

  hooks.useOutsideClick(contentRef, close, [opened]);

  return (
    <Wrapper opened={opened}>
      <Content innerRef={contentRef} opened={opened}>
        <TitleWrapper>
          <span>List Actions</span>
          <CloseIcon onClick={close} Icon={<HiOutlineX size={18} />} />
        </TitleWrapper>
        <Separator />
        <Action>Create list</Action>
        <Action onClick={handleCreateCard}>Create card</Action>
        <Separator />
        <Action>Some action</Action>
        <Action>Another action</Action>
        <Separator />
        <Action danger>Remove list</Action>
      </Content>
    </Wrapper>
  );
};

export default ListActions;
