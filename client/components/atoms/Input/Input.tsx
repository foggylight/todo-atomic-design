import React from 'react';

import styles from './Input.module.scss';

interface InputProps {
  placeholder?: string;
  className?: string;
  value?: string;
  onChange?: (value: string) => void | undefined;
}

export const Input: React.FC<InputProps> = ({ placeholder, className, value, onChange }) => {
  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.currentTarget.value);
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
  value: '',
  onChange: undefined,
};
