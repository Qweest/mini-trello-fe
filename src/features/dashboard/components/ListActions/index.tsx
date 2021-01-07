import React, { useRef } from 'react';
import { HiOutlineX } from 'react-icons/hi';

import { hooks } from '../../../../utils';
import { REMOVE_LIST_TIMEOUT } from '../../constants';
import {
  Wrapper,
  Content,
  Action,
  DangerAction,
  TitleWrapper,
  Separator,
  CloseIcon,
} from './styles';

interface Props {
  opened: boolean;
  close: () => void;
  setCreateCardFlag: (flag: boolean) => void;
  onRemoveClick: () => void;
}

const ListActions: React.FC<Props> = (props) => {
  const { opened, close, setCreateCardFlag, onRemoveClick } = props;
  const contentRef = useRef<HTMLDivElement>(null);

  const handleCreateCard = () => {
    setCreateCardFlag(true);
    close();
  };

  hooks.useOutsideClick(contentRef, close, opened);

  return (
    <Wrapper opened={opened}>
      <Content innerRef={contentRef} opened={opened}>
        <TitleWrapper>
          <span>List Actions</span>
          <CloseIcon onClick={close} Icon={<HiOutlineX size={18} />} />
        </TitleWrapper>
        <Separator />
        <Action onClick={() => {}}>Copy list</Action>
        <Action onClick={handleCreateCard}>Create card</Action>
        <Separator />
        <Action onClick={() => {}}>Some action</Action>
        <Action onClick={() => console.log('click')}>Another action</Action>
        <Separator />
        <DangerAction
          onClick={onRemoveClick}
          longPressTimeout={REMOVE_LIST_TIMEOUT}
        >
          Remove list
        </DangerAction>
      </Content>
    </Wrapper>
  );
};

export default ListActions;
