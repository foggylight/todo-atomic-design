import React from 'react';

import { Task } from '../Task/Task';
import { ITask, TaskState } from '../../../taskManager/models';

import styles from './TasksBlock.module.scss';

interface TasksBlockProps {
  tasksList: ITask[];
  onDeleteTask: (itemId: string) => void;
  onUpdateTask: (taskId: string, newData: ITask) => void;
}

export const TasksBlock: React.FC<TasksBlockProps> = ({
  tasksList,
  onDeleteTask,
  onUpdateTask,
}) => (
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
