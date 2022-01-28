import { ITask } from '../repository/models';
import { tasks } from '../repository/tasks';

export const addTask = (newTask: ITask) => {
  tasks.push(newTask);
};
