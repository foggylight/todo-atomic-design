import { Router, Request, Response } from 'express';

import { TaskService } from '../useCases/TaskService';

export const createRouter = (useCases: TaskService) => {
  const router = Router();

  router.get('/', async (req: Request, res: Response) => {
    const tasks = await useCases.getAllTasks();
    res.send(tasks);
  });

  router.post('/', async (req: Request, res: Response) => {
    const { newTask } = req.body;
    await useCases.addTask(newTask);
    res.send('Task was added');
  });

  router.put('/', async (req: Request, res: Response) => {
    const { taskId, newTaskData } = req.body;
    await useCases.updateTask(taskId, newTaskData);
    res.send('Task was updated');
  });

  router.delete('/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    await useCases.deleteTask(id);
    res.send(`Task ${id} was deleted`);
  });

  return router;
};
