import { ITask } from '../repository/models';
import { TaskRepository } from '../repository/TaskRepository';
import { TaskService } from './TaskService';

export class TaskUseCases implements TaskService {
  repository: TaskRepository;

  constructor(repository: TaskRepository) {
    this.repository = repository;
  }

  getAllTasks() {
    return this.repository.getAll();
  }

  addTask(newTask: ITask) {
    this.repository.addItem(newTask);
  }

  deleteTask(taskId: number) {
    this.repository.deleteItem(taskId);
  }

  updateTask(newTaskData: ITask) {
    this.repository.updateItem(newTaskData);
  }
}
