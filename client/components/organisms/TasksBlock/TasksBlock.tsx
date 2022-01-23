import React from 'react';

import { Task } from '../../molecules/Task/Task';

import styles from './TasksBlock.module.scss';

export const TasksBlock = () => (
  <div className={styles['tasks-block']}>
    <Task taskName="Task 1" />
    <Task taskName="Task 2" />
    <Task taskName="Task 3" />
  </div>
);
