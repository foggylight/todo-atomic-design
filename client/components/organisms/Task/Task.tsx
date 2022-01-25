import React, { useContext, useEffect, useState } from 'react';

import { Button } from '../../atoms/Button/Button';
import { Checkbox } from '../../atoms/Checkbox/Checkbox';
import { Input } from '../../atoms/Input/Input';
import { TaskState } from '../../../taskManager/models';
import { TaskContext } from '../../../taskManager/taskContext';

import styles from './Task.module.scss';

interface TaskProps {
  id: number;
  taskName: string;
  isDone: boolean;
}

export const Task: React.FC<TaskProps> = ({ id, taskName, isDone }) => {
  const [isChecked, setTaskState] = useState(isDone);
  const [isEdited, setEditedState] = useState(false);
  const [newTaskName, setNewTaskName] = useState(taskName);

  const { deleteTask, updateTask } = useContext(TaskContext);

  useEffect(() => {
    updateTask({ id, name: taskName, state: isChecked ? TaskState.done : TaskState.active });
  }, [isChecked]);

  const onEditHandler = () => {
    setEditedState(true);
  };

  const onSaveEditHandler = () => {
    setEditedState(false);
    updateTask({
      id,
      name: newTaskName,
      state: isDone ? TaskState.done : TaskState.active,
    });
  };

  const onDeleteHandler = () => {
    deleteTask(id);
  };

  return (
    <div className={styles.task}>
      {isEdited ? (
        <Input
          placeholder="Change task name"
          className={styles['task-name']}
          value={newTaskName}
          onChange={setNewTaskName}
        />
      ) : (
        <div className={styles['task-name']}>
          <Checkbox id={taskName} checked={isChecked} changeState={setTaskState} />
          <span className={isChecked ? styles['task-done'] : ''}>{taskName}</span>
        </div>
      )}
      <Button
        type="button"
        className={styles.btn}
        text={isEdited ? 'Save' : 'Edit'}
        onBtnClick={isEdited ? onSaveEditHandler : onEditHandler}
      />
      <Button type="button" className={styles.btn} text="Delete" onBtnClick={onDeleteHandler} />
    </div>
  );
};
