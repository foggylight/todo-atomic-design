import { TaskState } from '../repository/models';
import { tasks } from '../repository/tasks';
import { editTask } from '../useCases/editTask';

test('edit task', () => {
  const updatedTask = {
    id: 1,
    name: 'new task data',
    state: TaskState.done,
  };
  editTask(updatedTask);
  expect(tasks.find((task) => task.id === updatedTask.id)).toMatchObject(updatedTask);
});
