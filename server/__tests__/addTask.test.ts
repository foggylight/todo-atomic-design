import { TaskState } from '../repository/models';
import { tasks } from '../repository/tasks';
import { addTask } from '../useCases/addTask';

test('add task', () => {
  const newTask = {
    id: 4,
    name: 'test task',
    state: TaskState.done,
  };
  addTask(newTask);
  expect(tasks).toContainEqual(newTask);
});
