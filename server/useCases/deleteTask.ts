import { ITask } from '../repository/models';
import { tasks } from '../repository/tasks';

export const deleteTask = (taskId: number) => {
  const taskIndex = tasks.findIndex((task: ITask) => task.id === taskId);
  tasks.splice(taskIndex, 1);
};
