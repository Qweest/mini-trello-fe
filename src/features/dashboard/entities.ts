export interface Board {
  _id: string;
  name: string;
  taskColumns: Column[];
}

export interface Column {
  _id: string;
  name: string;
  tasks: Task[];
}

export interface Task {
  _id: string;
  title: string;
  description: string;
}
