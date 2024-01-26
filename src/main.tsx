import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import 'styles/_globalmixins.module.scss';
import 'styles/_reset.scss';
import "styles/index.scss";
import 'styles/variables.scss';
import App from './App.tsx';
import Spinner from './shared/Spinner/index.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Suspense fallback={<Spinner />}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Suspense>
)
