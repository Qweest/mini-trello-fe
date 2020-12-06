export interface Board {
  id: string;
  name: string;
  lists: List[];
}

export interface List {
  id: string;
  boardId: string;
  name: string;
  position: number;
  cards: Card[];
}

export interface Card {
  id: string;
  listId?: string;
  boardId?: string;
  title: string;
  description?: string;
}

export interface CreateListAction {
  boardId: string;
  name: string;
}

export interface MoveListAction {
  id: string;
  newIndex: number;
  oldIndex: number;
}

export interface MoveListActionPending extends MoveListAction {
  position: number;
  adjacentIndex: number;
}
