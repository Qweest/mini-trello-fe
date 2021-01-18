export interface BoardRequest {
  id: string;
}

export interface BoardResponse {
  id: string;
  name: string;
  lists: ListResponse[];
  cards: CardResponse[];
}

export interface MoveRequest {
  id: string;
  position: number;
}

export interface MoveCardRequest extends MoveRequest {
  listId: string;
}

export interface ListResponse {
  id: string;
  boardId: string;
  name: string;
  position: number;
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

export interface RemoveListRequest {
  id: string;
}

export interface CardRequest {
  id: string;
}

export interface CardResponse {
  boardId: string;
  listId: string;
  id: string;
  title: string;
  description: string;
  position: number;
}

export interface CreateCardRequest {
  boardId: string;
  listId: string;
  title: string;
  position: number;
}

export interface UpdateCardRequest {
  id: string;
  title?: string;
  description?: string;
}
