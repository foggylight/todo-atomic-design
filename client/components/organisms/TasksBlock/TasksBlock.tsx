import React, { useContext } from 'react';

import { Task } from '../Task/Task';
import { ITask, TaskState } from '../../../taskManager/models';
import { TaskContext } from '../../../taskManager/taskContext';

import styles from './TasksBlock.module.scss';

export const TasksBlock: React.FC = () => {
  const { allTasks } = useContext(TaskContext);

  return (
    <div className={styles['tasks-block']}>
      {allTasks.map((task: ITask) => (
        <Task
          id={task.id}
          key={task.id}
          taskName={task.name}
          isDone={task.state === TaskState.done}
        />
      ))}
    </div>
  );
};
