import React, { useState } from 'react';

import { Button } from '../../atoms/Button/Button';
import { Checkbox } from '../../atoms/Checkbox/Checkbox';
import { Input } from '../../atoms/Input/Input';
import { ITask, TaskState } from '../../../taskManager/models';

import styles from './Task.module.scss';

interface TaskProps {
  id: number;
  taskName: string;
  isDone: boolean;
  onDeleteTask: (itemId: number) => void;
  onUpdateTask: (newData: ITask) => void;
}

export const Task: React.FC<TaskProps> = ({ id, taskName, isDone, onDeleteTask, onUpdateTask }) => {
  const [isChecked, setTaskState] = useState(isDone);
  const [isEdited, setEditedState] = useState(false);
  const [newTaskName, setNewTaskName] = useState(taskName);

  const onUpdateStateHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTaskState(!isChecked);
    onUpdateTask({
      id,
      name: taskName,
      state: event.currentTarget.checked ? TaskState.done : TaskState.active,
    });
  };

  const onEditHandler = () => {
    setEditedState(true);
  };

  const onSaveEditHandler = () => {
    setEditedState(false);
    onUpdateTask({
      id,
      name: newTaskName,
      state: isChecked ? TaskState.done : TaskState.active,
    });
  };

  const onDeleteHandler = () => {
    onDeleteTask(id);
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
          <Checkbox id={taskName} checked={isChecked} onChangeState={onUpdateStateHandler} />
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
