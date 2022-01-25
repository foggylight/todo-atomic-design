import React from 'react';
import { NavLink } from 'react-router-dom';

import { Heading } from '../../atoms/Heading/Heading';

import styles from './Header.module.scss';

interface INavLink {
  id: number;
  name: string;
  path: string;
}

interface HeaderProps {
  headingText: string;
  navLinks: INavLink[];
}

export const Header = ({ headingText, navLinks }: HeaderProps) => (
  <div className={styles.container}>
    <Heading text={headingText} />
    <div className={styles.nav}>
      {navLinks.map((link) => (
        <NavLink
          key={link.id}
          className={({ isActive }) =>
            isActive ? `${styles['nav-link']} ${styles['nav-link_active']}` : styles['nav-link']
          }
          to={link.path}
        >
          {link.name}
        </NavLink>
      ))}
    </div>
  </div>
);
