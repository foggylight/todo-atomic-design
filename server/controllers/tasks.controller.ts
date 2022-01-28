import { Router, Request, Response } from 'express';

import { addTask } from '../useCases/addTask';
import { deleteTask } from '../useCases/deleteTask';
import { editTask } from '../useCases/editTask';
import { getAllTasks } from '../useCases/getAllTasks';

export const router = Router();

router.get('/', (req: Request, res: Response) => {
  const tasks = getAllTasks();
  res.send(tasks);
});

router.post('/', (req: Request, res: Response) => {
  const { newTask } = req.body;
  addTask(newTask);
  res.send('Task was added');
});

router.put('/', (req: Request, res: Response) => {
  const { updatedTask } = req.body;
  editTask(updatedTask);
  res.send('Task was updated');
});

router.delete('/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  deleteTask(Number(id));
  res.send(`Task ${id} was deleted`);
});
