import React, { useState } from 'react';

import { Input } from '../../atoms/Input/Input';
import { Button } from '../../atoms/Button/Button';

import styles from './TextInputForm.module.scss';

interface TextInputFormProps {
  onSubmit: (value: string) => void;
}

export const TextInputForm: React.FC<TextInputFormProps> = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState('');

  const submitHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    onSubmit(inputValue);
    setInputValue('');
  };

  return (
    <form className={styles['main-block']}>
      <Input
        placeholder="New task"
        value={inputValue}
        className={styles.input}
        onChange={setInputValue}
      />
      <Button type="submit" text="Add" onBtnClick={submitHandler} />
    </form>
  );
};
