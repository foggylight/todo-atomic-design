import React from 'react';

import { Input } from '../../atoms/Input/Input';
import { Button } from '../../atoms/Button/Button';

import styles from './NewTaskInput.module.scss';

export const NewTaskInput = () => (
  <div className={styles['main-block']}>
    <Input placeholder="New task" className={styles.input} />
    <Button type="submit" text="Add" />
  </div>
);
