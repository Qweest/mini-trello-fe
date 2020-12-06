import last from 'lodash/last';

import { MOVE_STEP } from './constants';

interface EntityWithPosition {
  position: number;
}

interface NextPositionConfig {
  isPositive: boolean;
  adjacentIndex: number;
  position: number;
}

export const getNewPosition = (entities: EntityWithPosition[]): number => {
  const newPosition = last(entities)?.position || 0;

  return newPosition + MOVE_STEP;
};

export const getNextPositionConfig = (
  entities: EntityWithPosition[],
  newIndex: number,
  oldIndex: number,
): NextPositionConfig => {
  const isPositive = newIndex - oldIndex > 0;
  const adjacentIndex = isPositive ? newIndex + 1 : newIndex;
  const targetPosition = entities[newIndex].position;

  return {
    isPositive,
    position: isPositive ? targetPosition + 1 : targetPosition,
    adjacentIndex,
  };
};
