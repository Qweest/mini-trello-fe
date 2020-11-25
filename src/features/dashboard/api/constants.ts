interface RouteWithId {
  (id: string): string;
}

export const BOARD: RouteWithId = (id) => `/boards/${id}`;
export const BOARDS = '/boards';
export const BOARDS_MOVE_COLUMN: RouteWithId = (id) =>
  `/boards/${id}/task-column-move`;

export const COLUMN: RouteWithId = (id) => `/taskColumns/${id}`;
export const COLUMNS = '/taskColumns';

export const TASK: RouteWithId = (id) => `/tasks/${id}`;
export const TASKS = '/tasks';
