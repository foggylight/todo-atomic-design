import { ITask } from './models';

export interface TaskRepository {
  getAll: () => Array<ITask>;
  addItem: (newTask: ITask) => void;
  deleteItem: (taskId: string) => void;
  updateItem: (taskId: string, updatedTask: ITask) => void;
}
