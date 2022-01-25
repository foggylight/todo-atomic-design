import React from 'react';

import { Task } from '../../molecules/Task/Task';
import { ITask, TaskState } from '../../../taskManager/models';

import styles from './TasksBlock.module.scss';

interface TasksBlockProps {
  tasksList: ITask[];
  onDeleteTask: (itemId: number) => void;
  onUpdateTask: (itemId: number, newData: ITask) => void;
}

export const TasksBlock = ({ tasksList, onDeleteTask, onUpdateTask }: TasksBlockProps) => {
  return (
    <div className={styles['tasks-block']}>
      {tasksList.map((task: ITask) => (
        <Task
          id={task.id}
          key={task.id}
          taskName={task.name}
          isDone={task.state === TaskState.done}
          onDeleteTask={onDeleteTask}
          onUpdateTask={onUpdateTask}
        />
      ))}
    </div>
  );
};
