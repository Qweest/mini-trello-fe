export interface Board {
  id: string;
  name: string;
  lists: List[];
}

export interface List {
  id: string;
  boardId: string;
  name: string;
  cards: Card[];
}

export interface Card {
  id: string;
  listId?: string;
  boardId?: string;
  title: string;
  description?: string;
}
