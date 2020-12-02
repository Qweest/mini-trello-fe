export interface BoardRequest {
  id: string;
}

export interface BoardResponse {
  id: string;
  name: string;
  lists: ListResponse[];
}

export interface MoveRequest {
  oldPosition: number;
  newPosition: number;
}

export interface MoveListRequest extends MoveRequest {
  boardId: string;
}

export interface ListResponse {
  id: string;
  boardId: string;
  name: string;
  cards: CardResponse[];
}

export interface CreateListRequest {
  boardId: string;
  name: string;
}

export interface UpdateListRequest {
  id: string;
  boardId: string;
  name: string;
}

export interface CardResponse {
  boardId: string;
  listId: string;
  id: string;
  title: string;
}

export interface CreateCardRequest {
  boardId: string;
  listId: string;
  title: string;
}
