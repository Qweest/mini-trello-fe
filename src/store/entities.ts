import { Board as BoardState } from '../features/dashboard/entities';

export interface RootState {
  dashboard: BoardState;
}
