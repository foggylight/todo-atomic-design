import { ITask } from './models';
import { tasks } from './Tasks';

export class TaskApi {
  tasks: ITask[];

  constructor() {
    this.tasks = tasks;
  }

  async getAllTasks() {
    return this.tasks;
  }

  async addTask(newTask: ITask) {
    this.tasks.push(newTask);
  }

  async deleteTask(taskId: number) {
    const taskIndex = this.tasks.findIndex((task: ITask) => task.id === taskId);
    this.tasks.splice(taskIndex, 1);
  }

  async updateTask(updatedTask: ITask) {
    const itemIndex = this.tasks.findIndex((item: ITask) => item.id === updatedTask.id);
    this.tasks.splice(itemIndex, 1, updatedTask);
  }
}
