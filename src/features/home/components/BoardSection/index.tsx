import React, { ReactElement } from 'react';
import { useHistory } from 'react-router-dom';

import { ROUTE_PATHS } from '../../../../navigation/constants';
import { BoardsResponse } from '../../api/entities';
import BoardTile from '../BoardTile';
import { Wrapper, Content, Row } from './styles';

interface Props {
  name: string;
  boards: BoardsResponse;
  Icon?: ReactElement;
}

const BoardSection: React.FC<Props> = ({ name, boards, Icon }) => {
  const history = useHistory();

  const handleClick = (boardId: string) => () =>
    history.push(`${ROUTE_PATHS.DASHBOARD}/${boardId}`);

  return (
    <Wrapper>
      <Row marginMultiplier={0.5}>
        {Icon}
        <span>{name}</span>
      </Row>
      <Content>
        {boards.map(({ name, id, settings: { backgroundImage } }) => (
          <BoardTile
            name={name}
            img={backgroundImage}
            key={id}
            onClick={handleClick(id)}
          />
        ))}
      </Content>
    </Wrapper>
  );
};

export default BoardSection;
