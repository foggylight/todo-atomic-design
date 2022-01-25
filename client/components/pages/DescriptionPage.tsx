import React from 'react';

import { Description } from '../templates/Description/DescriptionTemplate';

export const DescriptionPage: React.FC = () => {
  const text =
    'A simple Todo App made with React and TypeScript. The app can add, delete and edit todo.';

  return <Description text={text} />;
};
