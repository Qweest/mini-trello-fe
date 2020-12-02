import React from 'react';
import { HiOutlineBookOpen } from 'react-icons/hi';

import { colors } from '../../../../styles';
import { Row } from '../../../../components';
import { Card as CardEntity } from '../../entities';
import { Wrapper, Title, BadgesWrapper } from './styles';

interface Props {
  data: CardEntity;
}

const Card: React.FC<Props> = ({ data }) => {
  const { title, description } = data;
  const showBadges = !!description;

  return (
    <Wrapper>
      <Title>{title}</Title>
      {showBadges && (
        <BadgesWrapper>
          <Row>
            {description && (
              <HiOutlineBookOpen
                title="This card has a description"
                color={colors.grey}
              />
            )}
          </Row>
        </BadgesWrapper>
      )}
    </Wrapper>
  );
};

export default Card;
