import React from 'react';
import { HiOutlineBookOpen } from 'react-icons/hi';

import { colors } from '../../../../styles';
import { Row } from '../../../../components';
import { Task as TaskEntity } from '../../entities';
import { Wrapper, Title, BadgesWrapper } from './styles';

interface Props {
  data: TaskEntity;
}

const Task: React.FC<Props> = ({ data }) => {
  const { title, description } = data;
  const showBadges = !!description;

  return (
    <Wrapper>
      <Title>{title}</Title>
      {showBadges && (
        <BadgesWrapper>
          <Row>{description && <HiOutlineBookOpen color={colors.grey} />}</Row>
        </BadgesWrapper>
      )}
    </Wrapper>
  );
};

export default Task;
