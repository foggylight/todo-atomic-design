import mongoose from 'mongoose';
import { TaskState } from '../repository/models';

const taskSchema = new mongoose.Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  state: { type: String, enum: Object.values(TaskState), default: TaskState.active },
});

export const TaskModel = mongoose.model('task', taskSchema);
