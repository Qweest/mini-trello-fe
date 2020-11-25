import React, { SyntheticEvent, useState } from 'react';

import { validation } from '../../../../utils';
import { Row } from '../../../../components';
import { Column as ColumnEntity } from '../../entities';
import Task from '../Task';
import AddTaskButton from '../AddTaskButton';
import { TransparentWrapper, Wrapper, Title, ActionIcon } from './styles';

interface Props {
  data: ColumnEntity;
  addTask: (title: string) => void;
  updateColumn: (name: string) => void;
}

const Column: React.FC<Props> = (props) => {
  const { data, addTask, updateColumn } = props;
  const { name, tasks } = data;
  const [columnName, setColumnName] = useState(name);

  const handleColumnNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColumnName(e.target.value);
  };

  const handleSubmitName = () => {
    if (!validation.isEmpty(columnName) && columnName !== name) {
      updateColumn(columnName);
    } else {
      setColumnName(name);
    }
  };

  const handleTitleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSubmitName();
    }
  };

  return (
    <TransparentWrapper>
      <Wrapper>
        <Row marginMultiplier={0.5}>
          <Title
            placeholder="Enter column name..."
            value={columnName}
            onKeyDown={handleTitleKeyDown}
            onChange={handleColumnNameChange}
            onBlur={handleSubmitName}
          />
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
