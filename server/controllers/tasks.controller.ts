import { Router, Request, Response } from 'express';

import { TaskService } from '../useCases/TaskService';

export const createRouter = (useCases: TaskService) => {
  const router = Router();

  router.get('/', (req: Request, res: Response) => {
    const tasks = useCases.getAllTasks();
    res.send(tasks);
  });

  router.post('/', (req: Request, res: Response) => {
    const { newTask } = req.body;
    useCases.addTask(newTask);
    res.send('Task was added');
  });

  router.put('/', (req: Request, res: Response) => {
    const { updatedTask } = req.body;
    useCases.updateTask(updatedTask);
    res.send('Task was updated');
  });

  router.delete('/:id', (req: Request, res: Response) => {
    const { id } = req.params;
    useCases.deleteTask(Number(id));
    res.send(`Task ${id} was deleted`);
  });

  return router;
};
