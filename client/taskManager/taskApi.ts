import { ITask } from './models';

export class TaskApi {
  tasks: ITask[];

  constructor(items: Array<ITask>) {
    this.tasks = items;
  }

  getAllTasks() {
    return this.tasks;
  }

  addTask(newTask: ITask) {
    this.tasks.push(newTask);
  }

  deleteTask(taskId: number) {
    const taskIndex = this.tasks.findIndex((task: ITask) => task.id === taskId);
    this.tasks.splice(taskIndex, 1);
  }

  updateTask(updatedTask: ITask) {
    const itemIndex = this.tasks.findIndex((item: ITask) => item.id === updatedTask.id);
    this.tasks.splice(itemIndex, 1, updatedTask);
  }
}
