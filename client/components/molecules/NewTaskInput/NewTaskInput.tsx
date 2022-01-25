import React, { useState } from 'react';

import { Input } from '../../atoms/Input/Input';
import { Button } from '../../atoms/Button/Button';
import { ITask, TaskState } from '../../../taskManager/models';

import styles from './NewTaskInput.module.scss';

interface NewTaskInputProps {
  onAddNewTask: (newItem: ITask) => void;
}

export const NewTaskInput: React.FC<NewTaskInputProps> = ({ onAddNewTask }) => {
  const [inputValue, setInputValue] = useState('');

  const addNewTaskHandler = () => {
    onAddNewTask({
      id: Math.floor(Math.random() * 1000),
      name: inputValue,
      state: TaskState.active,
    });
    setInputValue('');
  };

  return (
    <div className={styles['main-block']}>
      <Input
        placeholder="New task"
        value={inputValue}
        className={styles.input}
        onChange={setInputValue}
      />
      <Button type="submit" text="Add" onBtnClick={addNewTaskHandler} />
    </div>
  );
};
