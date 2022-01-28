export enum TaskState {
  active = 'active',
  done = 'done',
}

export interface ITask {
  id: number;
  name: string;
  state: TaskState;
}
