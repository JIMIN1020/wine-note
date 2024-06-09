import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './assets/font/font.css';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './utils/queryClient';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </BrowserRouter>
  </ThemeProvider>
);
