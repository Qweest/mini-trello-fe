import React from 'react';
import { HiOutlineBookOpen } from 'react-icons/hi';
import { Draggable } from 'react-beautiful-dnd';

import { colors } from '../../../../styles';
import { Row } from '../../../../components';
import { Card as CardEntity } from '../../entities';
import { Wrapper, Title, BadgesWrapper } from './styles';

interface Props {
  data: CardEntity;
  index: number;
}

const Card: React.FC<Props> = ({ data, index }) => {
  const { id, title, description } = data;
  const showBadges = !!description;

  return (
    <Draggable draggableId={id} index={index}>
      {(providedDraggable) => (
        <Wrapper
          {...providedDraggable.draggableProps}
          {...providedDraggable.dragHandleProps}
          innerRef={providedDraggable.innerRef}
        >
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
      )}
    </Draggable>
  );
};

export default Card;
