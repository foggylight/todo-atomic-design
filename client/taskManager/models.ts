export enum TaskState {
  active = 'active',
  done = 'done',
}

export interface ITask {
  id: number;
  name: string;
  state: TaskState;
}

export interface TaskRepository {
  getAll?: () => Array<ITask>;
  addItem?: (newItem: ITask) => void;
  deleteItem?: (itemId: number) => void;
  updateItem?: (itemId: number, newData: ITask) => void;
}
