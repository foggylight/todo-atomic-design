import { tasks } from '../repository/tasks';
import { getAllTasks } from '../useCases/getAllTasks';

test('function exists', () => {
  getAllTasks();
});

test('return some value', () => {
  const allTasks = getAllTasks();
  expect(allTasks).not.toBeUndefined();
});

test('return same tasks', () => {
  const allTasks = getAllTasks();
  expect(allTasks).toEqual(tasks);
});
