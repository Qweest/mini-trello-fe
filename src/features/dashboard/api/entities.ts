export interface FetchBoardDTO {
  boardId: string;
}

export interface MoveDTO {
  boardId: string;
  currentPosition: number;
  newPosition: number;
}

export interface CreateColumnDTO {
  boardId: string;
  name: string;
}

export interface ColumnLoaded extends CreateColumnDTO {
  id: string;
  tasks: TaskLoaded[];
}

export interface CreateTaskDTO {
  boardId: string;
  taskColumnId: string;
  title: string;
}

export interface TaskLoaded extends CreateTaskDTO {
  id: string;
}
