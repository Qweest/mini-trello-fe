import React, { ReactElement } from 'react';

import { Row } from '../../../../components';
import { BoardResponse } from '../../../dashboard/api/entities';
import BoardTile from '../BoardTile';
import { Wrapper, Content } from './styles';

interface Props {
  name: string;
  boards: BoardResponse[];
  Icon?: ReactElement;
}

const BoardSection: React.FC<Props> = ({ name, boards, Icon }) => {
  return (
    <Wrapper>
      <Row>
        {Icon}
        {name}
      </Row>
      <Content>
        {boards.map(({ name, id, settings: { backgroundImage } }) => (
          <BoardTile name={name} img={backgroundImage} key={id} />
        ))}
      </Content>
    </Wrapper>
  );
};

export default BoardSection;
