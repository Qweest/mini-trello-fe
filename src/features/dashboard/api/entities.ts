export interface BoardDTO {
  boardId: string;
}

export interface MoveDTO {
  boardId: string;
  currentPosition: number;
  newPosition: number;
}

export interface TaskDTO {
  boardId: string;
  taskColumnId: string;
  title: string;
}

export interface TaskLoaded {
  id: string;
  boardId: string;
  taskColumnId: string;
  title: string;
}
