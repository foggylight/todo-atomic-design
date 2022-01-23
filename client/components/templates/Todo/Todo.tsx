import React from 'react';

import { Header } from '../../organisms/Header/Header';
import { NewTaskInput } from '../../molecules/NewTaskInput/NewTaskInput';
import { TasksBlock } from '../../organisms/TasksBlock/TasksBlock';

import styles from './Todo.module.scss';

export const Todo = () => (
  <div className={styles['page-wrapper']}>
    <div className={styles['content-wrapper']}>
      <Header headingText="Todo App" />
      <NewTaskInput />
      <TasksBlock />
    </div>
  </div>
);
