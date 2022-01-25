import { TaskRepository, ITask, TaskState } from './models';

class TaskManager {
  constructor(private repository: TaskRepository) {}

  getAllTasks() {
    return this.repository.getAll();
  }

  getActiveTasks() {
    return this.repository.getAll().filter((task: ITask) => task.state === TaskState.active);
  }

  addTask(newTask: ITask) {
    this.repository.addItem(newTask);
  }

  deleteTask(taskId: number) {
    this.repository.deleteItem(taskId);
  }

  updateTask(taskId: number, data: ITask) {
    this.repository.updateItem(taskId, data);
  }
}

export default TaskManager;
