import { Home as HomeState } from '../features/home/entities';
import { Board as BoardState } from '../features/dashboard/entities';
import { Auth as AuthState } from '../features/auth/entities';

export interface RootState {
  home: HomeState;
  dashboard: BoardState;
  auth: AuthState;
}
