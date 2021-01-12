import { BoardResponse } from '../dashboard/api/entities';

export interface Home {
  boards: BoardResponse[];
  pending: boolean;
  error: string;
}
