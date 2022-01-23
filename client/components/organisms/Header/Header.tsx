import React from 'react';

import { Heading } from '../../atoms/Heading/Heading';

import styles from './Header.module.scss';

interface HeaderProps {
  headingText: string;
}

export const Header = ({ headingText }: HeaderProps) => (
  <div className={styles.container}>
    <Heading text={headingText} />
  </div>
);
