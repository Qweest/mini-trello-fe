import React from 'react';
import { HiOutlinePlus } from 'react-icons/hi';

import { Row } from '../../../../components';
import { Column as ColumnEntity } from '../../entities';
import Task from '../Task';
import {
  TransparentWrapper,
  Wrapper,
  Title,
  ActionIcon,
  AddButton,
} from './styles';

interface Props {
  data: ColumnEntity;
}

const Column: React.FC<Props> = ({ data }) => {
  const { name, tasks } = data;

  return (
    <TransparentWrapper>
      <Wrapper>
        <Row marginMultiplier={0.5}>
          <Title placeholder="Enter column name..." value={name} />
          <ActionIcon />
        </Row>
        {tasks.map((it) => (
          <Task key={it._id} data={it} />
        ))}
        <AddButton Icon={<HiOutlinePlus />} text="Add card" />
      </Wrapper>
    </TransparentWrapper>
  );
};

export default Column;
