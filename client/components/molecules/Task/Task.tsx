import React, { useState } from 'react';

import { Button } from '../../atoms/Button/Button';
import { Checkbox } from '../../atoms/Checkbox/Checkbox';

import styles from './Task.module.scss';

interface TaskProps {
  taskName: string;
}

export const Task = ({ taskName }: TaskProps) => {
  const [isDone, setTaskState] = useState(false);
  return (
    <div className={styles.task}>
      <div className={styles['task-name']}>
        <Checkbox id={taskName} checked={isDone} changeState={setTaskState} />
        <span className={isDone ? styles['task-done'] : ''}>{taskName}</span>
      </div>
      <Button type="button" className={styles.btn} text="Edit" />
      <Button type="button" className={styles.btn} text="Delete" />
    </div>
  );
};
