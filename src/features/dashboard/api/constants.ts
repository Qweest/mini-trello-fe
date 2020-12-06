interface RouteWithId {
  (id: string): string;
}

export const BOARD: RouteWithId = (id) => `/boards/${id}`;
export const BOARDS = '/boards';

export const LIST: RouteWithId = (id) => `/lists/${id}`;
export const LISTS = '/lists';

export const CARD: RouteWithId = (id) => `/cards/${id}`;
export const CARDS = '/cards';
