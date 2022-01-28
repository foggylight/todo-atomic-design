import React from 'react';

import { PageWrapper } from '../../atoms/PageWrapper/PageWrapper';
import { Header } from '../../organisms/Header/Header';
import { TextBlock } from '../../atoms/TextBlock/TextBlock';
import { links } from '../../../constants/navigationLinks';

import styles from './Description.module.scss';

interface DescriptionProps {
  text: string;
}

export const Description: React.FC<DescriptionProps> = ({ text }) => (
  <PageWrapper>
    <Header headingText="Todo App" navLinks={links} />
    <TextBlock className={styles['text-block']} text={text} />
  </PageWrapper>
);
