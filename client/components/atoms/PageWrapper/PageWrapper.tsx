import React from 'react';

import styles from './PageWrapper.module.scss';

export const PageWrapper: React.FC = ({ children }) => (
  <div className={styles['page-wrapper']}>
    <div className={styles['content-wrapper']}>{children}</div>
  </div>
);
