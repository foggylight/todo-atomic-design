import React, { useState } from 'react';

import styles from './Input.module.scss';

interface InputProps {
  placeholder?: string;
  className?: string;
  defaultValue?: string;
  onChange?: (value: string) => void | undefined;
}

export const Input = ({ placeholder, className, defaultValue, onChange }: InputProps) => {
  const [value, setValue] = useState(defaultValue);

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value);
    onChange(event.currentTarget.value);
    if (onChange) {
      onChange(event.currentTarget.value);
    }
  };

  return (
    <input
      className={`${styles.input} ${className}`}
      placeholder={placeholder}
      value={value}
      onChange={onInputChange}
    />
  );
};

Input.defaultProps = {
  placeholder: '',
  className: '',
  defaultValue: '',
  onChange: undefined,
};
