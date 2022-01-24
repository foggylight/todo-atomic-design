import React from 'react';

import styles from './PageWrapper.module.scss';

interface PageWrapperProps {
  children: JSX.Element;
}

export const PageWrapper = ({ children }: PageWrapperProps) => (
  <div className={styles['page-wrapper']}>
    <div className={styles['content-wrapper']}>{children}</div>
  </div>
);
