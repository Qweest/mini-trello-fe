import last from 'lodash/last';
import sortBy from 'lodash/sortBy';

import { Card } from './entities';

interface EntityWithPosition {
  position: number;
}

interface NextPositionConfig {
  adjacentIndex: number;
  position: number;
}

export const sortByPosition = <T>(entities: T[]): T[] =>
  sortBy(entities, 'position');

export const getListSortedCards = (cards: Card[], listId: string): Card[] => {
  const listCards = cards.filter((it) => it.listId === listId);

  return sortByPosition(listCards);
};

export const getNewPosition = (entities: EntityWithPosition[]): number => {
  const newPosition = last(entities)?.position || 0;

  return newPosition + 1;
};

export const getNextPositionConfig = (
  entities: EntityWithPosition[],
  newIndex: number,
  oldIndex?: number,
): NextPositionConfig => {
  const isPositive = oldIndex === undefined ? false : newIndex - oldIndex > 0;
  const adjacentIndex = isPositive ? newIndex + 1 : newIndex;
  const targetPosition =
    entities[newIndex]?.position || getNewPosition(entities);

  return {
    position: isPositive ? targetPosition + 1 : targetPosition,
    adjacentIndex,
  };
};
