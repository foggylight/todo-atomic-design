import React from 'react';

import styles from './Input.module.scss';

interface InputProps {
  placeholder?: string;
  className?: string;
}

export const Input = ({ placeholder, className }: InputProps) => (
  <input className={`${styles.input} ${className}`} placeholder={placeholder} />
);

Input.defaultProps = {
  placeholder: '',
  className: '',
};
