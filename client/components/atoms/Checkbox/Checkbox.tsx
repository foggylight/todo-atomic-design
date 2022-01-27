import React from 'react';

import styles from './Checkbox.module.scss';

interface CheckboxProps {
  id: string;
  checked: boolean;
  onChangeState: React.ChangeEventHandler<HTMLInputElement>;
}

export const Checkbox: React.FC<CheckboxProps> = ({ id, checked, onChangeState }) => (
  <label htmlFor={id} className={styles['custom-checkbox']}>
    <input
      id={id}
      type="checkbox"
      checked={checked}
      onChange={onChangeState}
      className={styles.checkbox}
    />
    <span className={styles.checkmark} />
  </label>
);
