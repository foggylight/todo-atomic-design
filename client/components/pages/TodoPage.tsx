import React, { useCallback, useEffect, useMemo, useState } from 'react';

import { Todo } from '../templates/Todo/TodoTemplate';
import { ITask, TaskState } from '../../taskManager/models';
import { TaskContext } from '../../taskManager/taskContext';
import { TaskApi } from '../../taskManager/taskApi';

export const TodoPage: React.FC = () => {
  const api = useMemo(() => new TaskApi(), []);
  const [allTasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const tasks = await api.getAllTasks();
      setTasks(tasks);
    };
    getTasks();
  }, []);

  const addTask = useCallback(
    async (taskName) => {
      const newTask = {
        id: Math.floor(Math.random() * 1000),
        name: taskName,
        state: TaskState.active,
      };
      await api.addTask(newTask);
      const tasks = await api.getAllTasks();
      setTasks([...tasks]);
    },
    [allTasks],
  );

  const deleteTask = useCallback(
    async (taskId: number) => {
      await api.deleteTask(taskId);
      const tasks = await api.getAllTasks();
      setTasks([...tasks]);
    },
    [allTasks],
  );

  const updateTask = useCallback(
    async (newTaskData: ITask) => {
      await api.updateTask(newTaskData);
      const tasks = await api.getAllTasks();
      setTasks([...tasks]);
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
