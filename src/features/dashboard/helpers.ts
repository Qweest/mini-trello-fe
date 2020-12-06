import last from 'lodash/last';

import { MOVE_STEP } from './constants';

interface EntityWithPosition {
  position: number;
}

export const getNewPosition = (entities: EntityWithPosition[]): number => {
  const newPosition = last(entities)?.position || 0;

  return newPosition + MOVE_STEP;
};

export const getNextPosition = (
  entities: EntityWithPosition[],
  newIndex: number,
): number => {
  return entities[newIndex].position + 1;
};
