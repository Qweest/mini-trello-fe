export interface Board {
  id: string;
  name: string;
  taskColumns: Column[];
}

export interface Column {
  id: string;
  boardId: string;
  name: string;
  tasks: Task[];
}

export interface Task {
  id: string;
  title: string;
  description?: string;
  boardId?: string;
  taskColumnId?: string;
}
