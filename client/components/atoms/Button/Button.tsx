import React from 'react';

import styles from './Button.module.scss';

interface ButtonProps {
  type?: 'submit' | 'button';
  text: string;
  className?: string;
  onBtnClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const Button: React.FC<ButtonProps> = ({ type, text, className, onBtnClick }) => (
  <button
    className={`${styles.btn} ${className}`}
    type={type === 'submit' ? 'submit' : 'button'}
    onClick={onBtnClick}
  >
    {text}
  </button>
);

Button.defaultProps = {
  type: 'button',
  className: '',
  onBtnClick: () => {},
};
