import { ITask, TaskRepository } from './models';

class Repository implements TaskRepository {
  items: ITask[];

  constructor(items: Array<ITask>) {
    this.items = items;
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

  updateItem(itemId: number, newData: ITask) {
    const updatedTask = { ...this.items.find((item: ITask) => item.id === itemId), ...newData };
    const itemIndex = this.items.findIndex((item: ITask) => item.id === itemId);
    this.items.splice(itemIndex, 1, updatedTask);
  }
}

export default Repository;
