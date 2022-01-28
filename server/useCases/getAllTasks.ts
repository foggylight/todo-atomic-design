import { ITask } from '../repository/models';
import { tasks } from '../repository/tasks';

export const getAllTasks = (): ITask[] => {
  return tasks;
};
