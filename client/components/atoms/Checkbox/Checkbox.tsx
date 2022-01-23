import React from 'react';

import styles from './Checkbox.module.scss';

interface CheckboxProps {
  id: string;
  checked?: boolean;
  changeState?: (value: boolean) => void;
}

export const Checkbox = ({ id, checked, changeState }: CheckboxProps) => {
  const isChecked = () => {
    changeState(!checked);
  };

  return (
    <label htmlFor={id} className={styles['custom-checkbox']}>
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={isChecked}
        className={styles.checkbox}
      />
      <span className={styles.checkmark} />
    </label>
  );
};

Checkbox.defaultProps = {
  checked: false,
  changeState: () => {},
};
