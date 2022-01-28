import { ITask } from '../repository/models';
import { tasks } from '../repository/tasks';

export const editTask = (taskData: ITask) => {
  const itemIndex = tasks.findIndex((item: ITask) => item.id === taskData.id);
  tasks.splice(itemIndex, 1, taskData);
};
