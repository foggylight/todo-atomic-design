import { ITask } from '../useCases/models';

export interface TaskGateway {
  getAll: () => Promise<ITask[]>;
  addItem: (newTask: ITask) => void;
  deleteItem: (taskId: string) => void;
  updateItem: (itemId: string, newData: ITask) => void;
}
