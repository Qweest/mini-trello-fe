import React from 'react';

import { Row } from '../../../../components';
import { Column as ColumnEntity } from '../../entities';
import Task from '../Task';
import AddTaskButton from '../AddTaskButton';
import { TransparentWrapper, Wrapper, Title, ActionIcon } from './styles';

interface Props {
  data: ColumnEntity;
  addTask: (title: string) => void;
}

const Column: React.FC<Props> = (props) => {
  const { data, addTask } = props;
  const { name, tasks } = data;

  return (
    <TransparentWrapper>
      <Wrapper>
        <Row marginMultiplier={0.5}>
          <Title placeholder="Enter column name..." value={name} />
          <ActionIcon />
        </Row>
        {tasks.map((it) => (
          <Task key={it.id} data={it} />
        ))}
        <AddTaskButton addTask={addTask} />
      </Wrapper>
    </TransparentWrapper>
  );
};

export default Column;
