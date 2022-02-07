import { TaskGateway } from '../gateway/TaskGateway';
import { InMemoryTaskRepository } from '../gateway/InMemoryTaskGateway';
import { ITask, TaskState } from './models';
import { TaskUseCases } from './TasksUseCases';

const makeRepository = (): TaskGateway => {
  return new InMemoryTaskRepository();
};

test('get all tasks', async () => {
  const repository = makeRepository();
  const manager = new TaskUseCases(repository);
  const allTasks = await manager.getAllTasks();

  expect(allTasks).toEqual(repository.getAll());
});

test('add task', async () => {
  const repository = makeRepository();
  const manager = new TaskUseCases(repository);

  const newTask: ITask = {
    name: 'task3',
    state: TaskState.active,
  };
  await manager.addTask(newTask);
  const tasks = await manager.getAllTasks();

  expect(tasks.find((task) => task.name === newTask.name)).toMatchObject(newTask);
});

test('delete task', async () => {
  const repository = makeRepository();
  const manager = new TaskUseCases(repository);

  const deletedTaskId = '2';
  manager.deleteTask(deletedTaskId);
  const tasks = await manager.getAllTasks();

  expect(tasks.find((task) => task.id === deletedTaskId)).toBeUndefined();
});

test('update task', async () => {
  const repository = makeRepository();
  const manager = new TaskUseCases(repository);

  const taskId = '1';
  const newTaskData = {
    name: 'newName',
  };

  await manager.updateTask(taskId, newTaskData);
  const tasks = await manager.getAllTasks();

  expect(tasks.find((task) => task.id === taskId)).toMatchObject(newTaskData);
});
