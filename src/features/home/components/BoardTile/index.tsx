import React from 'react';

import { Wrapper, Text } from './styles';

interface Props {
  name: string;
  img?: string;
  onClick: () => void;
}

const BoardTile: React.FC<Props> = ({ name, img, onClick }) => {
  return (
    <Wrapper img={img} onClick={onClick}>
      <Text>{name}</Text>
    </Wrapper>
  );
};

export default BoardTile;
