import React, { useRef } from 'react';
import { hooks } from '../../../../utils';

import {
  Wrapper,
  Content,
  ActionsWrapper,
  Action,
  TitleWrapper,
  Separator,
  CloseIcon,
} from './styles';

interface Props {
  opened: boolean;
  close: () => void;
}

const ListActions: React.FC<Props> = (props) => {
  const { opened, close } = props;
  const contentRef = useRef<HTMLDivElement>(null);

  hooks.useOutsideClick(contentRef, close, [opened]);

  return (
    <Wrapper opened={opened}>
      <Content innerRef={contentRef} opened={opened}>
        <TitleWrapper>
          <div>List Actions</div>
          <CloseIcon onClick={close} />
        </TitleWrapper>
        <Separator />
        <ActionsWrapper>
          <Action>Rename list</Action>
          <Action>Create card</Action>
        </ActionsWrapper>
        <Separator />
        <ActionsWrapper>
          <Action>Rename list</Action>
          <Action>Create card</Action>
        </ActionsWrapper>
        <Separator />
        <ActionsWrapper>
          <Action>Remove list</Action>
        </ActionsWrapper>
      </Content>
    </Wrapper>
  );
};

export default ListActions;
