import { ITask } from './models';

export interface TaskRepository {
  getAll: () => Array<ITask>;
  addItem: (newTask: ITask) => void;
  deleteItem: (taskId: number) => void;
  updateItem: (updatedTask: ITask) => void;
}
