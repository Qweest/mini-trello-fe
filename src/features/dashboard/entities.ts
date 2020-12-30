export interface Board {
  id: string;
  name: string;
  lists: List[];
  cards: Card[];
  flags: Flags;
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

export interface CreateList {
  boardId: string;
  name: string;
}

export interface CreateCard {
  boardId: string;
  listId: string;
  title: string;
}

export interface Move {
  id: string;
  newIndex: number;
  oldIndex: number;
}

export interface MoveCard extends Move {
  listId: string;
  toListId: string;
}

export type MovePending<T> = T & {
  position: number;
  adjacentIndex: number;
};

export interface Flags {
  createListFlag: boolean;
}

export interface FlagAction {
  flag: boolean;
}
