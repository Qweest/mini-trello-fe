import React, { useRef } from 'react';
import { HiOutlineX } from 'react-icons/hi';
import { useDispatch } from 'react-redux';

import { hooks } from '../../../../utils';
import { REMOVE_LIST_TIMEOUT } from '../../constants';
import { actions } from '../../slice';
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
}

const ListActions: React.FC<Props> = (props) => {
  const { opened, close, setCreateCardFlag } = props;
  const dispatch = useDispatch();
  const contentRef = useRef<HTMLDivElement>(null);

  const handleCreateList = () => {
    dispatch(actions.setCreateListFlag({ flag: true }));
    close();
  };

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
        <Action onClick={handleCreateList}>Create list</Action>
        <Action onClick={handleCreateCard}>Create card</Action>
        <Separator />
        <Action onClick={() => {}}>Some action</Action>
        <Action onClick={() => console.log('click')}>Another action</Action>
        <Separator />
        <DangerAction
          onClick={() => console.log('long press')}
          longPressTimeout={REMOVE_LIST_TIMEOUT}
        >
          Remove list
        </DangerAction>
      </Content>
    </Wrapper>
  );
};

export default ListActions;
