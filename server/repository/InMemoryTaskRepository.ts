import { TaskGateway } from '../gateway/TaskGateway';
import { ITask, TaskState } from '../useCases/models';

export class InMemoryTaskRepository implements TaskGateway {
  items: ITask[];

  constructor() {
    this.items = [
      {
        id: '1',
        name: 'Add React Router',
        state: TaskState.done,
      },
      {
        id: '2',
        name: 'Add tasks',
        state: TaskState.done,
      },
      {
        id: '3',
        name: 'Add server',
        state: TaskState.active,
      },
    ];
  }

  async getAll() {
    return this.items;
  }

  addItem(newItem: ITask) {
    const id = `${Math.floor(Math.random() * 1000)}`;
    this.items.push({ ...newItem, id });
  }

  deleteItem(itemId: string) {
    const itemIndex = this.items.findIndex((item: ITask) => item.id === itemId);
    this.items.splice(itemIndex, 1);
  }

  updateItem(itemId: string, updatedItem: ITask) {
    const itemIndex = this.items.findIndex((item: ITask) => item.id === itemId);
    const item = this.items[itemIndex];
    this.items.splice(itemIndex, 1, { ...item, ...updatedItem });
  }
}
