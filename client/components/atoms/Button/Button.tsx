import React from 'react';

import styles from './Button.module.scss';

interface ButtonProps {
  type?: 'submit' | 'button';
  text: string;
  className?: string;
}

export const Button = ({ type, text, className }: ButtonProps) => (
  <button className={`${styles.btn} ${className}`} type={type === 'submit' ? 'submit' : 'button'}>
    {text}
  </button>
);

Button.defaultProps = {
  type: 'button',
  className: '',
};
