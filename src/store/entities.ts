import { Board as BoardState } from '../features/dashboard/entities';
import { Auth as AuthState } from '../features/auth/entities';

export interface RootState {
  dashboard: BoardState;
  auth: AuthState;
}
