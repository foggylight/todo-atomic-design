/* eslint-disable no-underscore-dangle */
/* eslint-disable class-methods-use-this */
import mongoose from 'mongoose';

import { ITask } from '../useCases/models';
import { TaskModel } from './TaskModel';
import { TaskGateway } from './TaskGateway';

export class MongoDBTaskGateway implements TaskGateway {
  constructor() {
    const connect = async () => {
      await mongoose.connect('mongodb://localhost:27017/todo-test');
    };
    connect().catch((err) => console.log(err));
  }

  async getAll() {
    const tasks = await TaskModel.find({});
    return tasks;
  }

  async addItem(newItem: ITask) {
    const task = new TaskModel(newItem);
    const mongodbTaskId = task._id;
    task.id = mongodbTaskId.toString();
    await task.save();
  }

  async deleteItem(itemId: string) {
    await TaskModel.deleteOne({ id: itemId });
  }

  async updateItem(itemId: string, newData: ITask) {
    await TaskModel.findByIdAndUpdate(itemId, newData);
  }
}
