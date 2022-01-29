import { InMemoryTaskRepository } from '../repository/InMemoryTaskRepository';
import { ITask, TaskState } from '../repository/models';
import { TaskRepository } from '../repository/TaskRepository';
import { TaskUseCases } from './TasksUseCases';

const makeRepository = (): TaskRepository => {
  return new InMemoryTaskRepository();
};

test('get all tasks', () => {
  const repository = makeRepository();
  const manager = new TaskUseCases(repository);
  const allTasks = manager.getAllTasks();

  expect(allTasks).toEqual(repository.getAll());
});

test('add task', () => {
  const repository = makeRepository();
  const manager = new TaskUseCases(repository);

  const newTask: ITask = {
    id: 3,
    name: 'task3',
    state: TaskState.active,
  };
  manager.addTask(newTask);

  expect(manager.getAllTasks()).toContainEqual(newTask);
});

test('delete task', () => {
  const repository = makeRepository();
  const manager = new TaskUseCases(repository);

  const deletedTaskId = 2;
  manager.deleteTask(deletedTaskId);

  expect(manager.getAllTasks().find((task) => task.id === deletedTaskId)).toBeUndefined();
});

test('update task', () => {
  const repository = makeRepository();
  const manager = new TaskUseCases(repository);

  const newTaskData = {
    id: 1,
    name: 'newName',
    state: TaskState.active,
  };
  manager.updateTask(newTaskData);

  expect(manager.getAllTasks().find((task) => task.id === newTaskData.id)).toMatchObject(
    newTaskData,
  );
});
