import { ITask, TaskState } from './models';
import { TaskRepository } from './TaskRepository';

export class InMemoryTaskRepository implements TaskRepository {
  items: ITask[];

  constructor() {
    this.items = [
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
  }

  getAll() {
    return this.items;
  }

  addItem(newItem: ITask) {
    this.items.push(newItem);
  }

  deleteItem(itemId: number) {
    const itemIndex = this.items.findIndex((item: ITask) => item.id === itemId);
    this.items.splice(itemIndex, 1);
  }

  updateItem(updatedItem: ITask) {
    const itemIndex = this.items.findIndex((item: ITask) => item.id === updatedItem.id);
    this.items.splice(itemIndex, 1, updatedItem);
  }
}
