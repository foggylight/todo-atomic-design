import { tasks } from '../repository/tasks';
import { deleteTask } from '../useCases/deleteTask';

test('delete task', () => {
  const deletedTaskId = 2;
  deleteTask(deletedTaskId);
  expect(tasks.find((task) => task.id === deletedTaskId)).toBeUndefined();
});
