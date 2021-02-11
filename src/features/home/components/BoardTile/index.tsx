import React from 'react';

import { Wrapper, Text, Fade, Details } from './styles';

interface Props {
  name: string;
  img?: string;
  onClick: () => void;
}

const BoardTile: React.FC<Props> = ({ name, img, onClick }) => {
  return (
    <Wrapper img={img} onClick={onClick}>
      <Fade />
      <Details>
        <Text>{name}</Text>
      </Details>
    </Wrapper>
  );
};

export default BoardTile;
