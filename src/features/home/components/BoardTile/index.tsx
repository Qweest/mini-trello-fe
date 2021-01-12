import React from 'react';

import { Wrapper, Text } from './styles';

interface Props {
  name: string;
  img?: string;
}

const BoardTile: React.FC<Props> = ({ name, img }) => {
  return (
    <Wrapper img={img}>
      <Text>{name}</Text>
    </Wrapper>
  );
};

export default BoardTile;
