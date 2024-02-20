import '@/styles/_globalmixins.module.scss';
import '@/styles/_reset.scss';
import "@/styles/index.scss";
import '@/styles/variables.scss';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);