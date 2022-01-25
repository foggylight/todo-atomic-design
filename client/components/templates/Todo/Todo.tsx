import React from 'react';

import { PageWrapper } from '../../atoms/PageWrapper/PageWrapper';
import { Header } from '../../organisms/Header/Header';
import { NewTaskInput } from '../../molecules/NewTaskInput/NewTaskInput';
import { TasksBlock } from '../../organisms/TasksBlock/TasksBlock';
import { links } from '../../../navigationLinks';
import { ITask } from '../../../taskManager/models';

interface TodoProps {
  tasks: ITask[];
  addNewTask: (newItem: ITask) => void;
  deleteTask: (itemId: number) => void;
  updateTask: (itemId: number, newData: ITask) => void;
}

export const Todo = ({ tasks, addNewTask, updateTask, deleteTask }: TodoProps) => {
  return (
    <PageWrapper>
      <>
        <Header headingText="Todo App" navLinks={links} />
        <NewTaskInput onAddNewTask={addNewTask} />
        <TasksBlock tasksList={tasks} onUpdateTask={updateTask} onDeleteTask={deleteTask} />
      </>
    </PageWrapper>
  );
};
