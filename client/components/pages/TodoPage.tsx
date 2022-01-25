import React, { useCallback, useMemo, useState } from 'react';

import { tasks } from '../../taskManager/Tasks';
import { Todo } from '../templates/Todo/TodoTemplate';
import { ITask } from '../../taskManager/models';
import { TaskContext } from '../../taskManager/taskContext';

export const TodoPage: React.FC = () => {
  const [allTasks, setTasks] = useState(tasks);

  const addTask = useCallback(
    (newTask: ITask) => {
      setTasks([...allTasks, newTask]);
    },
    [allTasks],
  );

  const deleteTask = useCallback(
    (taskId: number) => {
      const newTasks = allTasks.filter((task) => task.id !== taskId);
      setTasks(newTasks);
    },
    [allTasks],
  );

  const updateTask = useCallback(
    (newTaskData: ITask) => {
      const newTasks = allTasks.map((task) => (task.id === newTaskData.id ? newTaskData : task));
      setTasks(newTasks);
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
