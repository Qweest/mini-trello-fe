export interface BoardRequest {
  id: string;
}

export interface BoardResponse {
  id: string;
  name: string;
  lists: ListResponse[];
}

export interface ListResponse {
  id: string;
  boardId: string;
  name: string;
  position: number;
  cards: CardResponse[];
}

export interface CreateListRequest {
  boardId: string;
  name: string;
  position: number;
}

export interface UpdateListRequest {
  id: string;
  name: string;
}

export interface MoveRequest {
  id: string;
  position: number;
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
