import React, { useContext } from 'react';

import { PageWrapper } from '../../atoms/PageWrapper/PageWrapper';
import { Header } from '../../organisms/Header/Header';
import { TextInputForm } from '../../molecules/TextInputForm/TextInputForm';
import { TasksBlock } from '../../organisms/TasksBlock/TasksBlock';
import { links } from '../../../constants/navigationLinks';
import { TaskContext } from '../../../taskManager/taskContext';

export const Todo: React.FC = () => {
  const { allTasks, addTask, deleteTask, updateTask } = useContext(TaskContext);

  return (
    <PageWrapper>
      <Header headingText="Todo App" navLinks={links} />
      <TextInputForm onSubmit={addTask} />
      <TasksBlock tasksList={allTasks} onDeleteTask={deleteTask} onUpdateTask={updateTask} />
    </PageWrapper>
  );
};
