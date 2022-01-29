import { ITask } from '../repository/models';

export interface TaskService {
  getAllTasks: () => Array<ITask>;
  addTask: (newTask: ITask) => void;
  deleteTask: (taskId: number) => void;
  updateTask: (updatedTask: ITask) => void;
}
