export enum TaskState {
  active = 'active',
  done = 'done',
}

export interface ITask {
  id?: string;
  name?: string;
  state?: TaskState;
}
