import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { TodoPage } from './components/pages/TodoPage';
import { DescriptionPage } from './components/pages/DescriptionPage';

import './ui/default.scss';

export const App: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<TodoPage />} />
      <Route path="description" element={<DescriptionPage />} />
    </Routes>
  </BrowserRouter>
);
