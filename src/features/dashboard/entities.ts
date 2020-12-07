export interface Board {
  id: string;
  name: string;
  lists: List[];
  cards: Card[];
}

export interface List {
  id: string;
  boardId: string;
  name: string;
  position: number;
}

export interface Card {
  id: string;
  listId?: string;
  boardId?: string;
  title: string;
  description?: string;
  position: number;
}

export interface CreateListAction {
  boardId: string;
  name: string;
}

export interface CreateCardAction {
  boardId: string;
  listId: string;
  title: string;
}

export interface MoveAction {
  id: string;
  newIndex: number;
  oldIndex: number;
}

export interface MoveCardAction extends MoveAction {
  listId: string;
  toListId: string;
}

export type MoveActionPending<T> = T & {
  position: number;
  adjacentIndex: number;
};
