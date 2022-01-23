import React from 'react';

import styles from './Heading.module.scss';

interface HeadingProps {
  text: string;
}

export const Heading = ({ text }: HeadingProps) => <h1 className={styles.heading}>{text}</h1>;
