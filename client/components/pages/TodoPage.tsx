import React, { useState } from 'react';

import { tasks } from '../../taskManager/Tasks';
import { Todo } from '../templates/Todo/TodoTemplate';
import { ITask } from '../../taskManager/models';

export const TodoPage: React.FC = () => {
  const [allTasks, setTasks] = useState(tasks);

  const addTask = (newTask: ITask) => {
    setTasks([...allTasks, newTask]);
  };

  const deleteTask = (taskId: number) => {
    const newTasks = allTasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  };

  const updateTask = (newTaskData: ITask) => {
    const newTasks = allTasks.map((task) => (task.id === newTaskData.id ? newTaskData : task));
    setTasks(newTasks);
  };

  return (
    <Todo tasks={allTasks} addNewTask={addTask} updateTask={updateTask} deleteTask={deleteTask} />
  );
};
