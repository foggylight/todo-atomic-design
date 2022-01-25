import { ITask, TaskState } from './models';

export const tasks: ITask[] = [
  {
    id: 1,
    name: 'Add React Router',
    state: TaskState.done,
  },
  {
    id: 2,
    name: 'Add tasks',
    state: TaskState.done,
  },
  {
    id: 3,
    name: 'Add server',
    state: TaskState.active,
  },
];
