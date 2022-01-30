import { ITask } from '../repository/models';

export interface TaskService {
  getAllTasks: () => Promise<ITask[]>;
  addTask: (newTask: ITask) => void;
  deleteTask: (taskId: string) => void;
  updateTask: (taskId: string, updatedTask: ITask) => void;
}
