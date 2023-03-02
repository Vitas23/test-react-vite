import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppRouter } from './AppRouter';
import './index.css';
import { ThemeProvider } from './theme';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider>
      <Router>
        <AppRouter />
      </Router>
    </ThemeProvider>
  </React.StrictMode>
);
