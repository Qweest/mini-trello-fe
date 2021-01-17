import { BoardsResponse } from './api/entities';

export interface Home {
  boards: BoardsResponse;
  pending: boolean;
  error: string;
}
