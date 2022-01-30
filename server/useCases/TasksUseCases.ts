import { TaskGateway } from '../gateway/TaskGateway';
import { ITask } from '../repository/models';
import { TaskRepository } from '../repository/TaskRepository';
import { TaskService } from './TaskService';

export class TaskUseCases implements TaskService {
  repository: TaskRepository | TaskGateway;

  constructor(repository: TaskRepository | TaskGateway) {
    this.repository = repository;
  }

  async getAllTasks() {
    const tasks = await this.repository.getAll();
    return tasks;
  }

  async addTask(newTask: ITask) {
    await this.repository.addItem(newTask);
  }

  async deleteTask(taskId: string) {
    await this.repository.deleteItem(taskId);
  }

  async updateTask(taskId: string, newTaskData: ITask) {
    await this.repository.updateItem(taskId, newTaskData);
  }
}
