import React from 'react';

import styles from './TextBlock.module.scss';

interface TextBlockProps {
  text: string;
  className?: string;
}

export const TextBlock = ({ text, className }: TextBlockProps) => (
  <p className={`${styles.text} ${className}`}>{text}</p>
);

TextBlock.defaultProps = {
  className: '',
};
