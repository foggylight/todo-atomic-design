import React from 'react';

import { PageWrapper } from '../../atoms/PageWrapper/PageWrapper';
import { Header } from '../../organisms/Header/Header';
import { NewTaskInput } from '../../molecules/NewTaskInput/NewTaskInput';
import { TasksBlock } from '../../organisms/TasksBlock/TasksBlock';
import { links } from '../../../navigationLinks';

export const Todo: React.FC = () => {
  return (
    <PageWrapper>
      <Header headingText="Todo App" navLinks={links} />
      <NewTaskInput />
      <TasksBlock />
    </PageWrapper>
  );
};
