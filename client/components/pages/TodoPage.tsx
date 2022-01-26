import React, { useCallback, useMemo, useState } from 'react';

import { Todo } from '../templates/Todo/TodoTemplate';
import { ITask, TaskState } from '../../taskManager/models';
import { TaskContext } from '../../taskManager/taskContext';
import { TaskApi } from '../../taskManager/taskApi';

export const TodoPage: React.FC = () => {
  const api = new TaskApi();
  const tasks = api.getAllTasks();
  const [allTasks, setTasks] = useState(tasks);

  const addTask = useCallback(
    (taskName) => {
      const newTask = {
        id: Math.floor(Math.random() * 1000),
        name: taskName,
        state: TaskState.active,
      };
      api.addTask(newTask);
      setTasks([...api.getAllTasks()]);
    },
    [allTasks],
  );

  const deleteTask = useCallback(
    (taskId: number) => {
      api.deleteTask(taskId);
      setTasks([...api.getAllTasks()]);
    },
    [allTasks],
  );

  const updateTask = useCallback(
    (newTaskData: ITask) => {
      api.updateTask(newTaskData);
      setTasks([...api.getAllTasks()]);
    },
    [allTasks],
  );

  const contextValue = useMemo(() => ({ allTasks, addTask, deleteTask, updateTask }), [allTasks]);

  return (
    <TaskContext.Provider value={contextValue}>
      <Todo />
    </TaskContext.Provider>
  );
};
