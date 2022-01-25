import React from 'react';

import Repository from '../../taskManager/repository';
import TaskManager from '../../taskManager/taskManager';
import { tasks } from '../../taskManager/Tasks';
import { Todo } from '../templates/Todo/Todo';

export const TodoPage = () => {
  const repository = new Repository(tasks);
  const manager = new TaskManager(repository);
  const allTasks = manager.getAllTasks();

  return (
    <Todo
      tasks={allTasks}
      addNewTask={manager.addTask}
      updateTask={manager.updateTask}
      deleteTask={manager.deleteTask}
    />
  );
};
