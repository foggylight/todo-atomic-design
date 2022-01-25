import React from 'react';

import styles from './TextBlock.module.scss';

interface TextBlockProps {
  text: string;
  className?: string;
}

export const TextBlock: React.FC<TextBlockProps> = ({ text, className }) => (
  <p className={`${styles.text} ${className}`}>{text}</p>
);

TextBlock.defaultProps = {
  className: '',
};
