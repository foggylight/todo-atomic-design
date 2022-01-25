import React, { useContext, useState } from 'react';

import { Input } from '../../atoms/Input/Input';
import { Button } from '../../atoms/Button/Button';
import { TaskState } from '../../../taskManager/models';
import { TaskContext } from '../../../taskManager/taskContext';

import styles from './NewTaskInput.module.scss';

export const NewTaskInput: React.FC = () => {
  const [inputValue, setInputValue] = useState('');

  const { addTask } = useContext(TaskContext);

  const addNewTaskHandler = () => {
    addTask({
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
